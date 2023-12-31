---
layout: post
title:  "인터넷 프로토콜(Internet Protocol)이란?"
date:   2023-10-27 00:00:00 +0900
categories: HTTP
---

# 인터넷 프로토콜 (Internet Protocol) 이란?

인터넷 프로토콜은 데이터 패킷이 네트워크를 통해 이동하여 올바른 대상에 도달할 수 있도록 *라우팅 및 주소 지정을 위한 프로토콜 또는 규칙 집합이다

줄여서 IP라고 부른다

*라우팅 : 네트워크에서 경로를 선택하는 프로세스

## 인터넷 프로토콜의 역할

 패킷이라는 통신 단위로 IP 주소에 따라 목적지로 전달한다

사용 중인  IP 주소는 현재 IPv4와 IPv6가 있다

IP 패킷에 담겨 있는 내용은 전송 호스트의 IP 주소, 수신 호스트의 IP 주소, 기타 통시 데이터 및 전송하고자 하는 데이터가 있다.

## 인터넷 프로토콜의 문제점

> 비연결성

상대와 연결 후에 통신하는 것이 아니기에 일단 상대의 상태와 상관없이 패킷을 전송한다

간단하게 상대방이 배가 부른지 안 부른지 상관 안 하고 그냥 숟가락 들고 찾아가는 거랑 비슷하다.

> 비신뢰성

전송 과정에서 패킷이 손상되거나 소실될 수 있다

전송한 패킷의 순서가 뒤죽박죽으로 전달될 수도 있다

같은 패킷이 두 번 전송될 수도 있다

참고 : [모든 개발자를 위한 HTTP 웹 기본 지식](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/)
