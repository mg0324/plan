"""
自动刷新mb的gitee pages服务
https://gitee.com/mgang/plan/pages/rebuild
branch: master
build_directory:
force_https: false
auto_update: false
"""
import requests
# 获取登录后的
#loginParam = {'user_login':'1092017732@qq.com'}
#loginResult = requests.get('https://gitee.com/check_user_login',params=loginParam)
#gsn = loginResult.cookies['gitee-session-n']
#oschina_new_user = loginResult.cookies['oschina_new_user']
#user_locale = loginResult.cookies['user_locale']
#print(loginResult.cookies)
#cookieStr = 'user_locale=zh-CN; oschina_new_user='+oschina_new_user+"; gitee-session-n="+gsn
header = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length': '89',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'oschina_new_user=false; yp_riddler_id=1fc6e7a9-3827-40dc-af09-8360e69ce24d; close_wechat_tour=true; remote_way=ssh; user_locale=zh-CN; tz=Asia%2FShanghai; gitee_user=true; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22122375%22%2C%22first_id%22%3A%2217abcb4d3ec42e-05a960c7c38f4c-34647600-1764000-17abcb4d3edaa0%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E5%BC%95%E8%8D%90%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22http%3A%2F%2Fgit.oschina.net%2Fmgang%22%2C%22%24latest_utm_source%22%3A%22alading%22%2C%22%24latest_utm_campaign%22%3A%22repo%22%7D%2C%22%24device_id%22%3A%2217abcb4d3ec42e-05a960c7c38f4c-34647600-1764000-17abcb4d3edaa0%22%7D; Hm_lvt_24f17767262929947cc3631f99bfd274=1636860426,1636863976,1637156499,1637158987; Hm_lpvt_24f17767262929947cc3631f99bfd274=1637159000; gitee-session-n=YzhVZUFUem9zMDF2M3RqT1FoRlU3bS9qSFBka0FQanpWT2FLNTVIMlVsd0FQaUVLWEtxc2pWY25EN0pzVzVmVVowMWRxSUdWZGRiZk93OTgxT3NzM2kyQ01DbFNHUWV6TzFYdHFwR0M3Z2lLV0N5S3EvNDRPMjVuejQ4Q2laeFJZanZ1WXVBcFNMSGxNL2duaElWOGtSZDZNOWdZaGsxYXNFdllJMVQ1TlE3WWE1Q0JzUEFOZThiNHJiTklMSzZqVllyRGVySEQ2Rnc3a2U5VTIvR2RMUlZXOGdRWjVQNHJLZEJvZjNueVVhVTJSMW1ySnpSU0ZFN2Ewd2tPOVkxMFg2VzRodUxuaWZvcW5PQzRVWXlod1dzS1h1WGpMeXZ2T1lpTEhYSHJjblN5cHcrcVVlUEhIUmRzakZvSU1KR2p1UVB6MTFQY2FLOW54RkFHUDdhTk1yZ2sxWFBrYTRNVE4vRU8vS2s4a2Vlb1VzSmZNY0hINkRZRnZFc3UyOHpib0NaZWtudWIzeEt3ODVINVQ0RnBQZy9vT09RYXF1QWlzOHFNRGNvcGdEaHpEdDlGTkJScVhVK0hNdFB2T0ZHcUdQdUllcWZqbTRtVndOcVVvRGpzOHJvYnBtRHl1aGFYYTN6STgxaTdWdEJvcnhzeG5YaTU3K1JKK05aWHZ6WHVERE10UVdINTY3VGlGa2hHV043MzdBPT0tLWRvb2ZGbS9Pc3BjdVpBdlFqRDlreXc9PQ%3D%3D--264ee9a0786bf2c63c5d0cc00328844fa367a162',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36',
    'X-CSRF-Token': 'nSTyEYlOXYkl2jkVU9dBtTN5Uuuz+GnYwlyNYelwBdU2q10JtqfpnO9ptukcG/PKz5vF84FO88P6jp96lX6Caw==',
    'X-Requested-With': 'XMLHttpRequest'
}
data = {'branch': 'master', 'build_directory': 'docs/.vuepress/dist','force_https': 'false','auto_update': 'false'}
r = requests.post("https://gitee.com/mgang/plan/pages/rebuild",data,headers=header)
print(r.text)
if r.status_code == 200:
    print("刷新成功")
