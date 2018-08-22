import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Container from '../components/container'
import Grid from '../components/grid.js'
import Card from '../components/card.js'
import AuthorCard from '../components/authorcard'
import FeatureNewsCard from '../components/featurenewscard.js'
import ImageCard from '../components/image_card'
import {withRouter} from 'next/router'
import {Icon} from 'react-icons-kit'

import {ic_stars} from 'react-icons-kit/md/ic_stars'
import {socialTwitterCircular} from 'react-icons-kit/typicons/socialTwitterCircular'
import {socialFacebookCircular} from 'react-icons-kit/typicons/socialFacebookCircular'
import ReactDisqusComments from 'react-disqus-comments'

var strwd = "During the 2017-2018 academic year, the Counseling Center has seen a steady increase in the number of students utilizing its services — the center reports having seen 34 percent of the student body so far, and anticipates this figure to rise to about 36 percent by the end of the semester.\r\n\r\nOver the past four years, the number of students who have used the counseling center doubled, increasing from 15 percent in the 2012-2013 academic year, according to Director of the Counseling Center Jackie Alvarez.\r\n\r\nCompared to other small colleges, Amherst observes a higher number of students seeking counseling, but has similar trends to other highly selective colleges.\r\n\r\nAlvarez sees this trend as positive, a sign that the Counseling Center’s services have become more accessible over the years.\r\n\r\n“We worked to overhaul our service and how we deliver our service in order to increase accessibility, and I think we’ve been successful because in four years we’ve bumped up more than 100 percent,” she said.\r\n\r\nAccording to Alvarez, the center has implemented a number of additional services, including everyday urgent care, which allows students to book same-day appointments with the Counseling Center. “Students are more likely to follow up this way than if our first opening was in two weeks,” she said.\r\n\r\nAdditionally, the Counseling Center worked to decrease the wait time for non-urgent care appointments. Currently, the average wait time for an appointment is approximately four days.\r\n\r\nPsychiatry appointments have a slightly longer wait time, with the average being eight days. These figures are small in comparison to colleges nationally, in which some students might wait up to two weeks for an appointment.\r\n\r\nIn order to meet demand, the counseling center has broadened the number of services offered to students. Social workers, psychologists and case managers are just a few of the staff members the center has added over the past four years to meet students’ needs.\r\n\r\n“I think that really means that when students come, they can get plugged into the right type of service that they need,” Alvarez said. “We know that not every student comes in needing the same thing.”\r\n\r\nAlong with broadening the types of services offered, the Counseling Center also aimed to broaden the diversity of the staff to tailor to different student experiences.\r\n\r\nAlvarez believes that the variety of therapeutic perspectives and approaches to therapy offers students a wide range of services to choose from.\r\n\r\n“Sometimes for a student, [one service] is not a good fit for them initially, and they might need to make a transfer to somebody that has a theoretical orientation that better meets their needs,” she said.\r\n\r\nDespite these accomplishments, the Counseling Center recognizes that there are areas that need to be improved.\r\n\r\nOne thing the Counseling Center is currently working on is decreasing the stigma associated with using mental health services.\r\n\r\nThe center has partnered with Active Minds, a student organization that focuses on destigmatizing mental health issues, to raise awareness on campus.\r\n\r\nIn addition to this partnership, one of the Counseling Center’s main goals for improvement is increasing accessibility by going out into the campus community.\r\n\r\nAlvarez said she recognizes the relationships that are built through athletics programs, the resource centers and other communities on campus, and is looking for ways to partner with these communities to reach students where they are.\r\n\r\nThe Counseling Center currently sends liaisons to each of these groups to equip members to effectively respond to students’ mental health needs.\r\n\r\nCounseling Center liaisons and members of these groups meet on a weekly basis to discuss ways to reach students, talk to them and make referrals to the counseling center.\r\n\r\n“That’s been really important, to make sure that we are identifying students who may need additional supports and that the supports that are naturally there feel like they have the skills,” said Alvarez.\r\n\r\nThe Counseling Center also seeks to pay more attention to students to find ways to improve. To do so, the center sends out satisfaction surveys to students who use the campus’ mental health services.\r\n\r\nAlvarez found the surveys effective. The pantry, a donation service that provides personal items to students who are unable to afford them, sprouted from student survey responses.\r\n\r\n“We saw that students had needs, and they asked if there was any way [to make it happen]... we saw that we could bring that here,” Alvarez said.\r\n\r\nAs the Counseling Center continues to work on its services, Alvarez highlighted the importance of listening to students’ voices when looking at how to improve their services.\r\n\r\n“We sometimes miss the mark, so I would absolutely love to get feedback from those who are not happy with our service because that’s how we get better,” Alvarez said."

var text = strwd.replace(/(?:\r\n|\r|\n)/g, '<br >');
function createMarkup() {
  return {__html: text};
}
const Article = withRouter((props) => (<div className="main-content">
  <Head title="Article"/>
  <Container>
    <Grid className="news">
      <Card className=" span-12">
        <span className="weirdtext">
          BREAKING NEWS
        </span>
        <div className="header_text">
          <h1>{props.router.query.title}
            <span> </span>
            <a href=""><Icon size={32} icon={ic_stars}/></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=${escapedUrl}"><Icon size={32} icon={socialTwitterCircular}/></a>
            <a href="https://twitter.com/intent/tweet?url=${escapedUrl}&text=${text}"><Icon size={32} icon={socialFacebookCircular}/></a></h1>

        </div>
        <hr/>
        <div className="article_details">
          <h5>
            By Natalie De Rosa 21, Assistant News Editor | APRIL 4th 2018 | ISSUE 147-25
          </h5>

        </div>
      </Card>

      <article className="span-8">
        <ImageCard />
        <Card className=" article ting">
          <Container>
            <div>
              <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
          </Container>
        </Card>
        <Card classname ="article">
          <Container>
            <ReactDisqusComments shortname="example" identifier="something-unique-12345" title="Example Thread" url="http://www.example.com/example-thread" category_id="123456" onNewComment={this.handleNewComment}/>
          </Container>
        </Card>
      </article>

      <aside className="span-4">
        <AuthorCard />
        <FeatureNewsCard className="article"/>
      </aside>

    </Grid>
  </Container>

  <style jsx="jsx">
    {
      ` .main-content {
        padding-top: 300px;
        min-height: 100vh;
        font-family: 'Adobe Garamond Pro';
        background: #F1F1F1;
        padding-top: 180px;
        padding-bottom: 20px;
      }
      .span-8 {
        grid-column: 1 / 11;
      }

      .span-8 > * {
        margin-bottom: 15%;
      }
      .span-4 {
        width: 100%;
        grid-column: span 2;
      }
      .header_text {
        margin-left: 20px;
      }

      .span-12 {
        height: contain;
      }

      .article_content {
        padding: 5px;
        margin-bottom: 25px;
        line-height: 1.5em;
      }

      p {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 18px;
      }
      h1 {
        margin-bottom: 5px;
        padding-top: 20px;
      }
      hr {
        width: 100%;

      }
      .article_details {
        margin-top: 10px;
        margin-left: 20px;
        padding-bottom: 20px;
        display: flex;

      }
      .weirdtext {
        background: #5D3C85;
        color: white;
        font-family: MarkPro-Bold;
        font-size: 14px;
        letter-spacing: 0.12px;
        line-height: 21px;
        position: absolute;
        margin-top: 20px;
        padding: 5px;
        margin-left: 25px;

        margin-bottom: 40px;

      }
      .header_text {
        margin-top: 10px;
      }
      h5 {
        margin: 0 0 0 10px;

        font-family: Futura;
        font-weight: 200;
        font-size: 12px;
      }
       `
    }</style>
</div>))

export default Article
