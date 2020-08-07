---
permalink: /china
title: China
meta:
  title: China's Threat to Freedom
---

Tensions are growing between America and China. Conflict looks inevitable. Because We do not teach anything about China in our schools, most Americans know very little to start. Here's some information.

CCP = Chinese Communist Party


---

# Major Events


{% assign cchina_posts = site.posts | where_exp:"post", "post.tags contains 'major'"  %}


{% for post in cchina_posts -%}
  <h3><a href="{{ post.source_url | default: post.url }}">{{ post.description  }}</a></h3>
{%- endfor -%}

---

## Full Timeline

{% assign china_posts = site.posts | where_exp:"post", "post.category contains 'china'"  %}

<table class="timeline">
  {% for post in china_posts -%}
  <tr>
    <td class="date">{{ post.date | date: "%b" }} {{ post.date | date: "%d" }}</td>
    <td class="emoji">{{ post.emoji  | default: "🇨🇳" }}</td>
    <!-- <td class="source"><a href="#">{{ post.source  }}</a></td> -->
    <td class="description">{{ post.description | default: post.source_title  }}</td>
  </tr>
  <tr class="spacer"></tr>
  {%- endfor -%}
</table>


---

- FBI opens a new case on China every 10 hours
- 100,000 Chinese students come to America every year.


**White Monkey:** White people hired by China to say good things about China 

---

### Great Youtube Channels

- [laowhy86](https://www.youtube.com/c/laowhy86)
- [China Uncensored](https://www.youtube.com/user/NTDChinaUncensored)
- [America Uncovered](https://www.youtube.com/channel/UC_7vFlErTHxVD-IFNB-BFCg)

### Chinese State Media

- [China Daily](http://global.chinadaily.com.cn)
- [Global Times](https://twitter.com/globaltimesnews)




### Other Resources

- [U.S. Relations With China Fact Sheet](https://www.state.gov/u-s-relations-with-china/)
- [Exclusion Act](https://history.state.gov/milestones/1866-1898/chinese-immigration)