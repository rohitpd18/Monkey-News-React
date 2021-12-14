import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla to accept dogecoin as payment for merchandise, says Musk - Reuters",
            "description": "Tesla Inc (TSLA.O) chief Elon Musk said on Tuesday the electric carmaker will accept dogecoin as payment for merchandise on a test basis, sending the meme-based cryptocurrency up 24%.",
            "url": "https://www.reuters.com/markets/us/musk-says-tesla-will-accept-dogecoin-merchandise-2021-12-14/",
            "urlToImage": "https://www.reuters.com/resizer/MX9nr79xLNJYZbHsODEXKP-ZXCE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3BEPKBV2KBNH3FCFTXZ3EHYWYQ.jpg",
            "publishedAt": "2021-12-14T12:24:00Z",
            "content": "Dec 14 (Reuters) - Tesla Inc (TSLA.O) chief Elon Musk said on Tuesday the electric carmaker will accept dogecoin as payment for merchandise on a test basis, sending the meme-based cryptocurrency up 2… [+1875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "Jared Dubin",
            "title": "Rams at Cardinals score: Matthew Stafford outduels Kyler Murray as Los Angeles gets revenge on rivals - CBSSports.com",
            "description": "Stafford fires three scores in the NFC West shootout",
            "url": "https://www.cbssports.com/nfl/news/cardinals-vs-rams-score-matthew-stafford-outduels-kyler-murray-as-los-angeles-gets-revenge-on-rivals/live/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/14/d29498f2-acea-456a-8923-db260c916cfb/thumbnail/1200x675/589030401fcb0d485aa0d8d5a05a1bfd/matthrew-stafford-rams-2.jpg",
            "publishedAt": "2021-12-14T12:22:00Z",
            "content": "Kyler Murray was a walking highlight reel as per usual on Monday night, but his Cardinals lost their stranglehold on the NFC's No. 1 seed in a home rematch with the Rams. Matthew Stafford made his ow… [+3064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Wall Street Journal",
            "title": "Stock futures slip ahead of Fed meeting - Fox Business",
            "description": "Investors are watching to see if the uptick in Covid-19 cases and the new Omicron variant changes how quickly the Fed will wind down easy-money policies that have helped fuel this year’s stock rally when it concludes its meeting Wednesday.",
            "url": "https://www.foxbusiness.com/markets/stock-futures-gain-ahead-fed-meeting",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/02/0/0/nyse-trader-dow-23k.jpg?ve=1&tl=1",
            "publishedAt": "2021-12-14T12:19:36Z",
            "content": "U.S. stock futures edged lower ahead of the Federal Reserve’s two-day policy meeting, which is expected to end with the central bank signaling a faster wind-down of its bond-buying program.\r\nFutures … [+1193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Carl Zimmer, Rebecca Robbins",
            "title": "Pfizer Says Its Covid Pill, Paxlovid, Will Protect Against Severe Disease - The New York Times",
            "description": "The company said the pill, Paxlovid, reduced the risk of hospitalization and death by 89 percent if given within three days of the onset of symptoms.",
            "url": "https://www.nytimes.com/2021/12/14/health/pfizer-covid-pill-paxlovid.html",
            "urlToImage": "https://static01.nyt.com/images/2021/12/03/14virus-briefing-Pfizer/14virus-briefing-Pfizer-facebookJumbo-v2.jpg",
            "publishedAt": "2021-12-14T11:45:03Z",
            "content": "Mikael Dolsten, the chief scientific officer of Pfizer, was exuberant about the results after having overseen the development of the drug since the spring of 2020, with more than 200 company scientis… [+2361 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. House panel recommends contempt charge for ex-Trump aide Meadows - Reuters",
            "description": "The U.S. congressional committee probing the deadly Jan. 6 assault on the Capitol voted unanimously on Monday to seek \"contempt of Congress\" charges against Mark Meadows, who served as White House chief of staff to former President Donald Trump.",
            "url": "https://www.reuters.com/world/us/us-house-panel-seeks-contempt-charge-ex-trump-aide-meadows-2021-12-14/",
            "urlToImage": "https://www.reuters.com/resizer/mAIrGHxE8IwZ3MjolEGe925wvlQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VEWYHYRSQVPI5I2IVE5POIM3DA.jpg",
            "publishedAt": "2021-12-14T11:06:00Z",
            "content": "WASHINGTON, Dec 13 (Reuters) - The U.S. congressional committee probing the deadly Jan. 6 assault on the Capitol voted unanimously on Monday to seek \"contempt of Congress\" charges against Mark Meadow… [+4108 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nectar Gan, CNN",
            "title": "China detects second case of Omicron coronavirus variant on the mainland - CNN",
            "description": "China has detected its second case of the Omicron coronavirus variant in a traveler more than two weeks after he arrived in the country from overseas, posing a fresh challenge to the government's zero-Covid strategy.",
            "url": "https://www.cnn.com/2021/12/13/china/china-first-omicron-case-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211213214610-china-covid-test-processing-12122021-restricted-super-tease.jpg",
            "publishedAt": "2021-12-14T10:25:00Z",
            "content": "Hong Kong (CNN)China has detected its second case of the Omicron coronavirus variant in a traveler more than two weeks after he arrivedin the country from overseas, posing a fresh challenge to the go… [+4840 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Edmund DeMarche",
            "title": "Putin, Xi will talk about US ‘aggressive’ rhetoric during video call: Kremlin - Fox News",
            "description": "Russian President Vladimir Putin plans to talk to his Chinese counterpart Xi Jinping about tensions with the U.S. and NATO over Ukraine during a virtual summit on Wednesday that is expected to further cement their relationship.",
            "url": "https://www.foxnews.com/world/putin-xi-will-talk-about-us-aggressive-rhetoric-during-video-call-kremlin",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/12/putin.jpg",
            "publishedAt": "2021-12-14T10:20:37Z",
            "content": "Russian President Vladimir Putin plans to talk to his Chinese counterpart Xi Jinping about tensions with the U.S. and NATO over Ukraine during a virtual summit on Wednesday that is expected to furthe… [+1709 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Lesley Wroughton",
            "title": "Omicron variant more resistant to vaccines but causes less severe covid, major South African study concludes - The Washington Post",
            "description": "The study of the omicron coronavirus variant by South Africa's largest insurer involves 211,000 cases and is the most comprehensive to date.",
            "url": "https://www.washingtonpost.com/world/2021/12/14/south-africa-omicron-coronavirus/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3IDHAKSZPYI6ZA4WKVJL55K4HQ.jpg&w=1440",
            "publishedAt": "2021-12-14T10:08:40Z",
            "content": "However, the study found that the vaccine from U.S. pharmaceutical giant Pfizer and German partner BioNTech provided just 33 percent protection against infection, much less than the level for other v… [+1288 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Sam Byford",
            "title": "Oppo announces Air Glass ‘assisted reality’ device - The Verge",
            "description": "Oppo has announced an AR device called the Air Glass. It features a monochrome waveguide display and will be released in China next year.",
            "url": "https://www.theverge.com/2021/12/14/22833796/oppo-air-glass-ar-glasses-announced-china-release-date",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/s95fxDzwZXT8FG_DiUzhkG_1v3g=/0x107:1920x1112/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23086595/3._OPPO_Air_Glass_Weather_Notification.jpg",
            "publishedAt": "2021-12-14T09:30:00Z",
            "content": "Coming to China early next year\r\nOppo has announced the Air Glass, an AR device thatll go on sale early next year. Oppo describes the Air Glass as an assisted reality product, as opposed to augmented… [+1895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": null,
            "title": "FDA should make naloxone available without a prescription, advocates argue : Shots - Health News - NPR",
            "description": "With opioid overdoses surging, harm-reduction groups are calling on the FDA to change naloxone's prescription-only status. This would make it easier to get the lifesaving drug to people at risk.",
            "url": "https://www.npr.org/sections/health-shots/2021/12/14/1063865914/to-save-lives-overdose-antidote-should-be-sold-over-the-counter-advocates-argue",
            "urlToImage": "https://media.npr.org/assets/img/2021/12/13/narcan-1_wide-58ef8b6dd58a9c08687e096917205bd57d448eed.jpg?s=1400",
            "publishedAt": "2021-12-14T09:01:02Z",
            "content": "Louise Vincent, executive director of the North Carolina Survivors Union, holds a vial of the overdose reversal drug naloxone. \"Almost everyone that comes here is alive because of naloxone,\" Vincent … [+9175 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Jim Bob Duggar's Son-In-Law Says Josh Duggar Verdict Will Hurt State Senate Campaign - TMZ",
            "description": "Here's how Josh Duggar's conviction could affect his dad politically.",
            "url": "https://www.tmz.com/2021/12/14/jim-bob-duggar-derick-dillard-josh-duggar-verdict-hurt-state-senate-campaign/",
            "urlToImage": "https://imagez.tmz.com/image/ea/16by9/2021/12/13/ea56b53b1fc34359a12aa138a9f8c40e_xl.jpg",
            "publishedAt": "2021-12-14T08:50:00Z",
            "content": "Jim Bob Duggar's likelihood of winning a state senate race in Arkansas just went down, drastically, due to his son's conviction ... this according to another member of the Duggar fam.\r\nDerick Dillard… [+1991 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "Jaclyn Diaz",
            "title": "Accused Michigan school shooter's parents face probable cause hearing on Tuesday - NPR",
            "description": "The parents of Oxford High School shooting suspect Ethan Crumbley will be in court on Tuesday for a probable cause hearing on four involuntary manslaughter charges.",
            "url": "https://www.npr.org/2021/12/14/1063983232/the-parents-of-the-accused-michigan-school-shooter-head-to-court-again",
            "urlToImage": "https://media.npr.org/assets/img/2021/12/14/ap21347791882479_wide-db1e5176ff75ff80da5b44b78928dd9cd6f1e006.jpg?s=1400",
            "publishedAt": "2021-12-14T08:48:00Z",
            "content": "These undated photos provided by the Oakland County Sheriff's Office show James Crumbley, left, and Jennifer Crumbley, the parents of Ethan Crumbley, who is accused of killing four students at Oxford… [+4248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Covid: Call for volunteers as 500k book boosters in a day - BBC News",
            "description": "The government is aiming to give one million jabs a day across the UK during the rest of December.",
            "url": "https://www.bbc.com/news/uk-59646877",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/175A/production/_122087950_hi072599076.jpg",
            "publishedAt": "2021-12-14T08:05:33Z",
            "content": "Media caption, Dominic Raab says the booster vaccine should allow this Christmas will be different to last\r\nMore than half a million people booked their Covid booster jabs on Monday - despite the NHS… [+5187 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Blinken touts deeper U.S. engagement amid concern over 'aggressive' China - Reuters",
            "description": "Secretary of State Antony Blinken touted on Tuesday a U.S. strategy to deepen its Asian treaty alliances, offering to boost defence and intelligence work with partners in an Indo-Pacific region increasingly concerned over China's \"aggressive actions\".",
            "url": "https://www.reuters.com/world/blinken-says-us-advance-alliances-ensure-free-indo-pacific-2021-12-14/",
            "urlToImage": "https://www.reuters.com/resizer/qUreXT1KQVSWJH_A9Y2eu4z83HM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UF7R3GWJGNMQBMFSDN7PJNRJ5Y.jpg",
            "publishedAt": "2021-12-14T07:29:00Z",
            "content": "JAKARTA, Dec 14 (Reuters) - Secretary of State Antony Blinken touted on Tuesday a U.S. strategy to deepen its Asian treaty alliances, offering to boost defence and intelligence work with partners in … [+4259 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "Appeals court rejects Biden administration's bid to end 'Remain in Mexico' policy - New York Post ",
            "description": "An appeals court on Monday night rejected another attempt by the Biden administration to end the Trump-era policy that requires migrants seeking asylum in the US to await their cases in Mexico.",
            "url": "https://nypost.com/2021/12/14/appeals-court-rejects-biden-administrations-bid-to-end-remain-in-mexico-policy/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/12/remain-in-mx-policy-474.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-12-14T06:52:00Z",
            "content": "An appeals court on Monday night rejected another attempt by the Biden administration to end the Trump-era policy that requires migrants seeking asylum in the US to await their cases in Mexico.\r\nThe … [+1221 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Los Angeles Times"
            },
            "author": "Tracy Brown, Sonaiya Kelley, Michael Ordoña",
            "title": "'Spider-Man: No Way Home' spoilers: Here's what to know - Los Angeles Times",
            "description": "Arguably the year's most anticipated movie had its world premiere on Monday, and fans are likely to rejoice at what's in store.",
            "url": "https://www.latimes.com/entertainment-arts/movies/story/2021-12-13/spider-man-no-way-home-spoilers",
            "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/dd086aa/2147483647/strip/true/crop/4577x2403+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9a%2F47%2F5a3648d34551a71f02476c3ad64c%2Fspider-mannowayhome1.jpg",
            "publishedAt": "2021-12-14T06:30:00Z",
            "content": "Warning: The following article contains modest spoilers for Spider-Man: No Way Home. Were preserving the biggest secrets and plot details until the film is open, but for those looking for an informed… [+3655 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Protesting voting rights activists arrested as Biden meets with Manchin - The Guardian",
            "description": "Sixty were detained as the president met with the key Democrat who has become a roadblock to his agenda",
            "url": "https://amp.theguardian.com/us-news/2021/dec/13/voting-rights-activists-arrested-biden-manchin",
            "urlToImage": null,
            "publishedAt": "2021-12-14T06:02:00Z",
            "content": "US voting rightsSixty were detained as the president met with the key Democrat who has become a roadblock to his agenda\r\nLauren Burke in Washington DC\r\nTue 14 Dec 2021 01.00 EST\r\nDuring a crucial wee… [+4060 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Anthony Slater",
            "title": "Five observations: Warriors win ugly in Indianapolis as Steph Curry creeps to doorstep of record - theathletic.com",
            "description": "The Warriors pulled out a \"gritty\"win over the Pacers as Curry inches closer to the 3-point record.",
            "url": "https://theathletic.com/3014628/2021/12/14/five-observations-warriors-win-ugly-in-indianapolis-as-steph-curry-creeps-to-doorstep-of-record/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2021/12/14005003/warriors-2.jpg",
            "publishedAt": "2021-12-14T05:52:36Z",
            "content": "INDIANAPOLIS — Here are five observations from the Warriors’ 102-100 road win over the Pacers on Monday night.1. How’d they pull it out?\r\nThe Warriors have lost three of their past seven games and pl… [+1242 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Steve Almasy, CNN",
            "title": "NBA, NHL games called off due to Covid-19 protocols - CNN",
            "description": "With winter almost upon us and people spending more time indoors, Covid-19 cases have been rising. And sports groups and their players have not been spared. Here's a look at the latest Covid news from the NBA, NHL and NFL.",
            "url": "https://www.cnn.com/2021/12/14/sport/covid-halts-sports-teams-seasons-spt/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211214000345-nba-covid-cancellation-1213-restricted-super-tease.jpg",
            "publishedAt": "2021-12-14T05:12:00Z",
            "content": "(CNN)With winter almost upon us and people spending more time indoors, Covid-19 cases have been rising.\r\nSports groups and their players have not been spared -- and Monday saw several announcements c… [+3885 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC 7 San Diego"
            },
            "author": "NBC 7 Staff,City News Service",
            "title": "California Announces Mandatory Indoor Mask Mandate Despite Vaccination Status - NBC San Diego",
            "description": "Californians will be required to wear masks in all indoor settings beginning Dec. 15, regardless of vaccination status, state officials announced today.",
            "url": "https://www.nbcsandiego.com/news/coronavirus/california-announces-mandatory-indoor-mask-mandate-despite-vaccination-status/2815877/",
            "urlToImage": "https://media.nbcsandiego.com/2021/08/FaceMaskRequired.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2021-12-14T04:31:45Z",
            "content": "<ul><li>Mandatory indoor mask mandate goes into effect on Wed. Dec. 15</li><li>Mandate to last a month until Jan. 15, with health officials citing an increase in COVID-19 cases since Thanksgiving</li… [+10342 chars]"
        }
    ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loding: false,
    };
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/everything?q=tesla&from=2021-11-14&sortBy=publishedAt&apiKey=4fb100e2622e48a2858af64f06531373";
    let data= await fetch(url);
    let parsedData= await data.json()
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Trending News- Today</h1>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}
