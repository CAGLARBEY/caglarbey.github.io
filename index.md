---
layout: home
title: Ana Sayfa
---

# Merhaba, ben Çağlar Bey!

Siber güvenlik ve mekatronik alanında projeler geliştiriyor, blog yazıları yazıyorum.

---

## Son Yazılarım

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%d %b %Y" }})
{% endfor %}

---

## Hakkımda

[Hakkımda sayfasını ziyaret et](/about)
