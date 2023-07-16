# 记录一个小的爬虫项目

这里记录了一个小的爬虫项目，用于爬取中国水泥网的相关数据。

```python
import requests
import parsel

url = "https://www.chinaisa.org.cn/gxportal/xfgl/portal/list.html?columnId=3238889ba0fa3aabcf28f40e537d440916a361c9170a4054f9fc43517cb58c1e"
headers = {'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.50",
           'Cookie': 'GX_UA_FLAG=P; route=ddc43b6c5fcabeed853c5b845c0a7eea; JSESSIONID=93A3F81C0895B29A6DFAF439E2593548',
           'Host': 'www.chinaisa.org.cn',
           'Referer': 'https://www.chinaisa.org.cn/gxportal/xfgl/portal/list.html?columnId=3238889ba0fa3aabcf28f40e537d440916a361c9170a4054f9fc43517cb58c1e'}
respond = requests.get(url, headers=headers)
respond.encoding = respond.apparent_encoding
temp = respond.text

# print(respond)
selector = parsel.Selector(respond.text)
title = selector.css('body > div.top').get()


novle = selector.css('.bookname h1::text').get()
content = selector.css('#content::text').getall()
content = '\n'.join(content)
print(novle)
print(content.encode('gbk', 'ignore').decode('gbk', 'ignore'))





import selenium
from selenium import webdriver

browser = webdriver.Chrome() # 打开浏览器
url='https://www.chinaisa.org.cn/gxportal/xfgl/portal/index.html'#以该链接为例
browser.get(url)#访问相对应链接
response = browser.find_elements_by_class_name('right')
response[0].click()
browser.page_source
```

