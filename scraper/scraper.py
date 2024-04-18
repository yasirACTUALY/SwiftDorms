import requests
from bs4 import BeautifulSoup

def fetchHtml(url):
    # make a request to the target website
    url = 'http://worldagnetwork.com/'
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    r = requests.get(url, headers=headers)
    if r.status_code == 200:
        # if the request is successful return the HTML content
        return r.text
    else:
        # throw an exception if an error occurred
        # raise Exception("an error occurred while fetching coingecko html")
        print(r.status_code)

def extract_crypto_info(html):
    # parse the HTML content with Beautiful Soup
    soup = BeautifulSoup(html, "html.parser")

    # find all the cryptocurrency elements
    address = soup.find("header", {"class": "entry-header"})
    print (address)
    # crypto_elements = coin_table.find_all("tr")[1:]

    # # iterate through our cryptocurrency elements
    # cryptos = []
    # for crypto in crypto_elements:
    #     # extract the information needed using our observations
    #     cryptos.append({
    #         "name": crypto.find("td", {"class": "coin-name"})["data-sort"],
    #         "price": crypto.find("td", {"class": "td-price"}).text.strip(),
    #         "change_1h": crypto.find("td", {"class": "td-change1h"}).text.strip(),
    #         "change_24h": crypto.find("td", {"class": "td-change24h"}).text.strip(),
    #         "change_7d": crypto.find("td", {"class": "td-change7d"}).text.strip(),
    #         "volume": crypto.find("td", {"class": "td-liquidity_score"}).text.strip(),
    #         "market_cap": crypto.find("td", {"class": "td-market_cap"}).text.strip()
    #     })
    
    # return cryptos
html = fetchHtml("http://troystudenthousing.com/apartments/2226-15th-st-troy-ny/")
print(html)
# extract_crypto_info(html)