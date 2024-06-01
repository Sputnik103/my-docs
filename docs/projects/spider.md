---
title: 记录一个小的爬虫项目
tags: 
  - 爬虫
  - Python
---

<style>
p{
text-indent: 2em; /*首行缩进*/
}
</style>

这里记录了一个小的爬虫项目，用于爬取中国水泥网的相关数据。

```python
import pandas as pd
import selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
import parsel
import time

data_path = r'D:\230529 Zhangzhou\利率预测\coding_output'

driver = webdriver.Chrome() # 打开浏览器
url = 'https://www.chinaisa.org.cn/gxportal/xfgl/portal/index.html'
driver.get(url)#访问相对应链接
response = driver.find_element(By.XPATH,'/html/body/div[1]/div[2]/div/div[4]/div[2]/div[1]/div[1]/a[1]')
response.click()
page = driver.find_element(By.CLASS_NAME,"total").text
page_num = int(page[2])
result = []
for i in range(page_num):
    response2 = driver.find_element(By.CLASS_NAME,"list").text
    result.append(response2)
    driver.find_element(By.CLASS_NAME, "last").click()
    time.sleep(2)

temp = '\n'.join(result).split()
temp = [i.strip('[').strip(']') for i in temp]
date_list = pd.DataFrame([[temp[i], temp[i+1]] for i in range(0, len(temp), 2)])
date_list.columns = ["title","date"]
date_list.to_csv(data_path + "\steel_date.csv")
```

