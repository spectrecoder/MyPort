
import { FaBuilding } from "react-icons/fa";


const data = [
  {
    date: '2020.2 - 2022.10',
    role: 'Senior Software Engineer',
    company: 'One Trust, Reston,',
    location: 'Virginia(remote)',
    bullet: [
      `
      Developed a cutting-edge web application using React and Next.js for DDR Company, enhancing user experience and boosting engagement by 40% through intuitive design and seamless navigation features.
      `,
      `
      Built most of the backend using Node.js along with Express and also made a combination of SSR and SSG
      for both dynamic and static pages.`
      ,
      `
      Developed custom Django applications, including advanced user authentication and 
      authorization systems, API integrations, and data modeling for efficient data retrieval and manipulation.      `
      ,
      `
      Enhanced user engagement and customer support experience by providing real-time chat functionality, 
      resulting in increased customer satisfaction using Web Socket.    
      `,
      `
      Streamlined data flow and enhanced application performance through effective utilization of React-Redux
      state management.
      `,
      `
      Used CSS3 features like CSS3 Media Queries, Pseudo-Classes, multi-column layouts, gradients, and
      web fonts.
      `,
      `
      Actively participated in Scrum development methodology, by collaborating with the development
      team, participating in sprint planning, and delivering high-quality code within defined timelines.
      `,
      `
      Managed AWS EC2, S3, API Gateway, Lambda and EBS for better performance and scalable infrastructure.
      `,
      `
      Translated client requirements into clean, reliable, and maintainable codes. 
      `,
      `
      Monitoring performance gaps and identifying errors in user experience before they appear. 
      `,
      `
      Optimized and improved the code quality by owning the rewriting of the application from an MVC
      view- based approach to a SPA, rewriting all class-based components to functional components with
      hooks, implemented the Context API for global storage and authored over 330 individual tests across
      110 test suites to react 80% code coverage. 
      `,
      `
      Rewrote the code and refactored previous projects with Next.js, Tailwind CSS, and Typescript.
      `,
      `
      Successfully integrated the payment system with Stripe, resulting in a 30% increase in successful transactions
      and a 25% reduction in checkout abandonment rates.
      `,
      `
      Integrated Twilio and SendGrid email services, resulting in a 40% increase in email delivery efficiency and 
      25% reduction in bounce rates.
      `,
      `
      Enabled seamless interaction with Ethereum blockchain networks, enhancing user experience and functionality of decentralized applications using ethers.js and web3.js
      `,
      `
      Developed the $Frost token, APR NFT and Reward generated NFT, and NFT Migration contract on BSC  chain.      `,
      `
      Built the NFT Migration landing pages and Staking pages with React and Redux - saga and used css framework – SCSS.      `,
      `
      Implemented the DEX using web3.py with KyberSwap Elastic and Zyber V3 and WOOFi V2.      `
      ,
      `
      Brought in shipping confidence for the app and improved our deployment pipeline by 
      implementing a testing harness in Jest and Enzyme covering over 75% of client code, configuring 
      linting with ESLint and formatting with Prettier for overall code quality.      `
      ,
      `
      Worked in CI/CD environment (Jira pipelined with slack, Jenkins – automatic testing system, Dock deployment).`
      ,
      `
      Used JIRA for bug tracking and used Git as a version control tool and Jenkins is used for the continuous integration of builds.  `
      ,
      `
      Collaborated closely with cross-functional teams, including developers, QA engineers, and product managers
      to understand healthcare domain requirements and deliver robust solutions that meet the unique needs
      of the industry, such as HIPAA compliance and data security.    `
      ,

    ]
  },
  {
    date: '2026.8 - 2020.2',
    role: 'Software Engineer',
    company: 'Exabytes,',
    location: 'malaysia',
    bullet: [
      `
      Developed  high-traffic e-commerce platforms using HTML5, CSS, and SPA frameworks including Angular, 
      React, and Vue.js  resulting in a 20% improvement in website loading speed. 
      `,
      `
      Maintained advanced proficiency in React state management strategies, leveraging Flux architecture, 
      Redux, Context API, and Hooks resulting in a 30% reduction in application load times.
      `,
      `
      Collaborated in cross-functional projects within lean development environments, contributing to a 20% 
      increase in project efficiency through streamlined processes.
      `,
      `
      Developed custom D3.js components and Armchart for dynamic data representation, enhancing user engagement and data interpretation.
      `,
      `
      Played a key role in the development of two mobile apps: RWRD coffee shop app and Tila Musing with
      React Native.
      `,
      `
      Expertly implemented RESTful API calls using Axios and Fetch libraries, optimizing data retrieval and
      transmission processes resulting in a 30% reduction in response time and improved  application efficiency.
      `,
      `
      Successfully integrated RESTful web service calls across diverse project requirements, ensuring smooth
      data transactions and system functionality.
      `,
      `
      Designed and implemented  GraphQL queries and mutations using Apollo Client and Optimized data
      fetching process, resulting in a 40% reduction in network traffic and improved application performance.
      `,
      `
      Optimized EMR (Elastic MapReduece) cluster configurations, resulting in a 20% reduction in processing time
      and cost savings.
      `,
      `
      Demonstrated expertise in utilizing fast HTTP servers and AWS architecture for efficient API system deployment.
      `,
      `
      Demonstrated expertise in utilizing Cypress and Cucumber frameworks for robust end-to-end testing.
      `,
      `
      Consistently pushed code updates to GitHub repositories, facilitating seamless collaboration and version tracking.
      `,
    ]
  }
]

export default function MyResume() {


  return (
    <div className="mt-[20px]">
      {
        data.map((a, idx) => (
          <div key={idx} className="flex px-[15px] pb-[20px] justify-center gap-[40px] mt-[-10px]">
            <div className="w-[200px] text-gray-500 text-right text-[14px]">
              {a.date}
            </div>
            <div className="relative resume-body pl-[50px] w-full text-white text-[16px] ">
              <div className="resume-icon">
                <FaBuilding />
              </div>
              <div className="mt-[-10px] text-[#404040]">
                {a.role}
                <div className="text-gray-500" >{a.company} <span className="italic">{a.location}</span></div>
              </div>
              {
                a.bullet.map((b, idx) => (
                  <div key={idx} className="relative mt-[20px]">
                    <div className="resume-bullet " />
                    <div className={`text-gray-500 ${idx === a.bullet.length - 1 ? 'pb-[20px]' : ''} text-[14px] italic`}>
                      {b}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>

  )
}
