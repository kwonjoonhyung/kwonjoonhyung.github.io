---
layout: post
title:  "자바 네이밍 컨벤션"
date:   2023-10-02 00:00:00 +0900
categories: JAVA
---

> 네이밍 컨벤션

명명 규칙은 프로그램을 읽기 쉽게 함으로써 프로그램을 더 이해하기 쉽게 만들어 준기 위해 생긴 규칙이다. 

> 공동 규칙

이름으로 자바의 예약어가 오면 안 된다.

첫 글자는 숫자가 될 수 없다.

특수문자는 밑줄('_')와 $만 사용 가능하다.

> 패키지

패키지 이름은 항상 소문자로만 작성된다.

일반적으로 최상위 도메인 중 하나 (com, org, io 등)가 가장 먼저 나오고 이후 회사명, 프로젝트명, 상위 패키지, 하위 패키지 등등의 이름을 이어붙여 사용한다.

 ex) com.sun.eng

 com.apple.quicktime.v2

 edu.cmu.cs.bovik.cheese

> 클래스

클래스의 이름은 명사이며, 각 내부 단어의 첫 글자는 대문자여야 한다.

 ex) class Raster;

 class ImageSprite;

> 인터페이스

클래스의 명명 규칙과 동일한다.

> 메소드

첫 글자는 소문자이고 내부 단어의 시작은 대문자로 시작한다.

되도록이면 동사로 이름을 짓는다.

 ex) run();

 runFast();

 getBackground();

> 변수

첫 글자는 소문자이고 내부 단어의 시작은 대문자로 시작한다.

되도록 짧지만 의미가 있는 단어를 사용해야 한다.

임시로 사용되는 변수를 제외하고는 웬만하면 한문자 변수는 피한다.

임시적인 변수의 예로는 정수의 경우 i, j, k, m, m 이고 문자의 경우 c, d, e이다.

 ex) int i;

 char c;

 float myWidth;

> 상수

상수의 이름은 모두 대문자로 작성하며 단어 구분은 밑줄('_')로 한다.

 ex) static final int MIN_WIDTH = 4;

 static final int MAX_WIDTH = 999;



출처 : https://www.oracle.com/java/technologies/javase/codeconventions-namingconventions.html