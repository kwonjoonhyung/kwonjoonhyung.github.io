---
layout: post
title:  "Junit 5 간단 정리"
date:   2023-11-04 00:00:00 +0900
categories: Junit
---

> Junit 이란?

JAVA 용 단위 테스트 프레임워크이다

> Junit 특징

Junit의 테스트 인스턴스는 기본적으로 메서드 단위이다. 따라서 각 메서드 별로 따로 인스턴스가 생성되어 서로 간의 영향이 없다

\* @TestInstance(value = PER_CLASS)를 클래스 앞에 달아주면 메서드 단위 인스턴스 생성이 아닌 클래스 단위 생성으로 바꿀 수 있다

> Junit Annotation

@Test : 해당 메서드가 테스트 대상 메서드임을 의미

\* 주의사항 : 테스트의 순서는 매번 변동될 수 있다.

@DisplayName : 해당 테스트 케이스의 명칭을 지정

@BeforEach : 각 테스트 메서드가 실행되기 전에 동작하는 메서드

@AfterEach : 각 테스트 메서드가 실행된 후 동작하는 메서드

@BeforeAll : 모든 테스트 메서드가 실행되기 전 한번 실행되는 메서드

@AfterAll : 모든 테스트 메서드가 실행된 후 한번 실행되는 메서드

@Disable : 해당 메서드는 실행되지 않음

> Junit Method

assertEquals(A(expected), B(extual)) : A와 B가 같은지 비교

assertTrue(A) : 조건이 참인지 판별

assertNotNull(A) : 객체가 null이 아닌지 판별

