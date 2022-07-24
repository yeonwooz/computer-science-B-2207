## CS 면접 스터디 B그룹

---

[노션링크](https://richnomader.notion.site/CS-B-1c8e1b46894f4a83bfd49d71cf5272c5)

#### 프로젝트 포크

```
git remote add upstream [업스트림 저장소 url]
git remote add origin [포크해온 개인저장소 url]
```

#### 업스트림에 pull request 보내기
```
git push origin [작업브랜치] 
이후, 오리진에서 업스트림의 타깃 브랜치를 향해 PR 
```

#### 업스트림 내용을 오리진에 반영하기 

```
git fetch upstream
git rebase upstream/[타깃브랜치] [작업브랜치]
```