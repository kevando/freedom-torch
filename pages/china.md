---
permalink: /china
title: China
meta:
  title: China's Threat to Freedom
---

Tensions are growing between America and China. Conflict looks inevitable. We do not teach anything about China in America and that's a problem. The absolute #1 most important thing Americans need to know about China is the Chinese people are wondeful people and it's the CCP that we need to be concerned about.

CCP = Chinese Communist Party

---

# Major Events


{% assign china_posts = site.posts | where_exp:"post", "post.tags contains 'major'"  %}

{% for post in china_posts -%}
<div class="major-timeline">
<p class="date">{{ post.date | date: "%b" }} {{ post.date | date: "%d" }}</p>
  
  <!-- <h3 class="title">{{ post.description  }}</h3> -->
  <h3 class="title"><a href="{{ post.url }}">{{ post.description  }}</a></h3>
  <!-- <h3 class="summary">{{ post.summary  }}</h3> -->
  <!-- <p class="read-more"><a href="{{ post.source_url | default: post.url }}">Read More</a></p> -->
  </div>
  
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
- Applw has 2m employees in china. 4x walmart has in the us


**White Monkey:** White people hired by China to say good things about China 

---

### Quality Youtube Channels

- [laowhy86](https://www.youtube.com/c/laowhy86)
- [China Uncensored](https://www.youtube.com/user/NTDChinaUncensored)
- [America Uncovered](https://www.youtube.com/channel/UC_7vFlErTHxVD-IFNB-BFCg)

### Chinese State Media

- [China Daily](http://global.chinadaily.com.cn)
- [Global Times](https://twitter.com/globaltimesnews)

### Other Resources

- [U.S. Relations With China Fact Sheet](https://www.state.gov/u-s-relations-with-china/)
- [Exclusion Act](https://history.state.gov/milestones/1866-1898/chinese-immigration)
- [China's Ideology](https://palladiummag.com/2019/05/31/xi-jinping-in-translation-chinas-guiding-ideology/)