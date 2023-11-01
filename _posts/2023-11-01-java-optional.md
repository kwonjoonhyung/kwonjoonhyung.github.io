---
layout: post
title:  "자바 Optional"
date:   2023-11-01 00:00:00 +0900
categories: JAVA
---

> Optinal

NullPointException을 방지하기 위해 사용되는 클래스

null이 나오는 케이스를 아예 감싸 Optional이 다루어줌

모든 형태의 객체를 전부 Optional로 감쌀 수 있음

> Optional 생성 방법

Optional.empty() : 비어있는 Optional 객체를 생성.

Optional.of(객체) : null이 아닌 데이터만 Optional로 감쌈. null이 올 경우 NPE 반환

Optional.nullable(객체) : null이든 아니든 감싸는데 null인 경우 null 대신 Optional empty로 저장함