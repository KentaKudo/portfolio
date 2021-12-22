---
title: CPU Experiment at the University of Tokyo
description: |-
  "CPU Experiment" at the University of Tokyo (UT) CS undergrad course is one of the most famous (either in a good way or bad way) programmes among those who are concerned.

  Here, I want to introduce what the programme is, and what kind of exciting stuff are going on there.
language: en/GB
tags:
  - computer science
  - system programming
image:
  src: hardware.jpg
  alt: electronics hardware
  credit: Photo by <a href="https://unsplash.com/@jorgedevs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jorge Ramirez</a> on <a href="https://unsplash.com/s/photos/computer-science?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---

I note in passing that this is NOT based on my personal experience because I was not a CS student at UT. So apologies if I'm not very accurate in some details but I hope I don't miss the big picture.

## What's CPU Experiment

The programme is held in the autumn-winter term in the third year. CS undergrads are divided into a group of 3–5 people, and they'll be given a credit if they can successfully run the ray-tracing app written in MinCaml (a subset of OCaml), which is handed out at the introduction, at the end term presentation.

The rules and conditions have changed over time but basically what they need to do are:

- define ISA (original or based on PowerPC, MIPS, RISC-V, etc.)
- build a CPU core on a provided FPGA ([KCU105](https://www.xilinx.com/products/boards-and-kits/kcu105.html))
- write an assembler
- extend a [MinCaml compiler](https://github.com/esumii/min-caml) so it can compile the given ray-tracing app
- write a simulator to debug the compiler/assembler
- compile & run the required ray-tracing app on the self-built CPU

Each team member is assigned to one of the four tasks: CPU (core), FPU, simulator, and compiler. Conventionally the assembler seems to be done by a member who is responsible for the simulator.

What's cool about this on-the-job style programme I think is not only you can learn how to integrate the computer science knowledge you learned through the course, but also you need to finish the project in time collaborating with other team members.

## That's not the end of the story

This is where things get even more exciting.

For most of them it's not very difficult to run the required ray-tracing app, and actually they succeed in running the app in less than 3months.

How do they spend the rest of the term?

It's up to them how to use the time: Most of the teams try to optimise the system to amaze people by how fast they can run the app at the end term presentation.

The optimisation ideas include:

- design richer ISA
- introduce pipelining
- optimise compiler to reduce the number of instructions
- and so on

The current record seems to be 5s, which was made in 2017(\*), and generally speaking under 20s is considered to be brazing fast.

(\* The team realised multi-core CPU & the compiler that utilises it.)

However, some teams decide to venture into the wild adventure…

## Creative (crazy) ideas they try

As long as the ray-tracing app works, you can be credited for the course. There's nothing to prevent them from tackling their creative ideas such as:

- run an OS such as xv6, Linux, or even write an original OS
- run the ray-tracing app on the OS
- implement a single instruction that runs the ray-tracing
- etc.

There are lots of things involved to achieve these: To run an OS you'll need much richer ISA than just running the ray-tracing app. If you want to run the existing OS written in C on your original ISA, you'll need a C compiler that targets the ISA …and so on.

Some of them were realised by their exhaustive effort, while the others are yet to come true. So exciting, aren't they?

## Why am I writing this?

Some may wonder why I'm writing a post to introduce something I didn't do. Well, there are two reasons:

First of all, I think the programme is very cool and worth sharing. There are lots of blog posts written by students but most of them are in Japanese (see the next section), and only few resources are available in English for their cool stuff.

And the second one, rather personal one, is that I'm interested in tracing this "CPU Experiment" as my personal project. I've been working as a software engineer for almost 7 years. Thankfully I could grow a lot in this space, yet I've been feeling I missed chances to learn computer science basics. I thought it's a great idea to follow what they do to fill this gap.

I hope I can give updates on my project soon:)

## References

Even though most of them are written in Japanese, I'll leave some links for those who are interested so you can at least have a look at their code:)

2010

- [CPU 実験](https://wata-orz.hatenadiary.org/entry/20100319/1268998396)

2015

- [CPU 実験で自作 CPU に UNIX ライク OS (xv6) を移植した話](https://nullpo-head.hateblo.jp/entry/2015/03/24/205419)
- [EN][how we ran a unix-like os (xv6) on our home-built cpu with our home-built c compiler](https://fuel.edby.coffee/posts/how-we-ported-xv6-os-to-a-home-built-cpu-with-a-home-built-c-compiler/)
  - This is basically the same article as the one above but in English.
- [自作 CPU 向け C コンパイラをつくって OS 動かした話 (CPU 実験まとめ)](https://kw-udon.hatenablog.com/entry/2015/03/19/171921)

2016

- [東大理情名物の CPU 実験で毎週徹夜したお話（概要編）](https://medium.com/eureka-engineering/%E6%9D%B1%E5%A4%A7%E7%90%86%E6%83%85%E5%90%8D%E7%89%A9%E3%81%AEcpu%E5%AE%9F%E9%A8%93%E3%81%A7%E6%AF%8E%E9%80%B1%E5%BE%B9%E5%A4%9C%E3%81%97%E3%81%9F%E3%81%8A%E8%A9%B1-%E6%A6%82%E8%A6%81%E7%B7%A8-6cb8c155cb64)

2017

- [CPU 実験：マルチコアで並列実行するまで（コンパイラ係目線）](https://eguchishi.hatenablog.com/entry/2017/09/09/150229)
- [CPU 実験 2016 年度 D 班コア係（CPU 実験でマルチコア）](https://sueki743.hatenablog.jp/entry/2017/03/30/151822)

2018

- [東大の CPU 実験で自作コア上の自作 OS 上で自作シェルを動かした話](https://travelingresearcher.com/entry/2018/02/27/172417)

2019

- [RISC V に従う CPU の上で動作する OS を Rust で書く（CPU 実験余興）](https://moraprogramming.hateblo.jp/entry/2019/03/17/165802)

2020

- [Linux が動作する RISC-V CPU を自作した (2019 年度 CPU 実験 余興)](https://diary.shift-js.info/building-a-riscv-cpu-for-linux/)
- [CPU 実験が終わりました 〜コア係目線〜](https://misteer.hatenablog.com/entry/cpuex)
- [CPU 実験の振り返り (コンパイラ係目線)](https://okuraofvegetable.hatenablog.com/entry/2020/02/29/230201)

2021

- [CPU 実験振り返り(シミュレータ・FPU 係目線)](https://note.com/tomo_stleq/n/ncc8a1ff8ba20)
- [ああ CPU 実験](https://cfkazu.hatenablog.com/entry/2020/12/05/000416)
