---
layout: home
title: Home 
---

# Hi, I'm Çağlar !

I develop projects and write blog posts on cyber security and mechatronics.

---

## My Last Posts

{% for post in site.posts limit:10 %}
- [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%d %b %Y" }})
{% endfor %}

---

## About me

[Visit the About Me page](/about)
