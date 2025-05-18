---
layout: home
title: Ana Sayfa
---

# Merhaba, ben 1r0n W1ng !

Siber güvenlik ve mekatronik alanında projeler geliştiriyor, blog yazıları yazıyorum.

---

## Son Yazılarım

{% for post in site.posts limit:10 %}
- [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%d %b %Y" }})
{% endfor %}

---

## Hakkımda

[Hakkımda sayfasını ziyaret et](/about)
