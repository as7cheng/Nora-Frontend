import BlogCard from "../components/BlogCard/BlogCard";

function About() {
  return (
     <div className='mb-auto' style={{
     display: 'grid',
     gridTemplateColumns: 'repeat(2, 1fr)',
     gridRowGap: '3rem',
     gridColumnGap: '2rem',
     margin: '3rem'
     }}>
       <BlogCard props={
       {'header': 'tutorials',
       'image': 'https://shihancheng.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F829250bc-785a-4a5b-b444-2cf1d17c897b%2Frds-local-10.png?table=block&id=151b2d46-07a8-4991-9745-37d58c457fe3&spaceId=e6cb9c07-a4eb-4a48-8189-854452add412&width=2000&userId=&cache=v2',
       'title': 'Connect RDS From Local Machine',
       'url': 'https://shihancheng.notion.site/Connect-a-RDS-DB-Instance-From-Your-Local-Machine-021b9d5d7bbd42d3aaa52d89f87c355c'
       }}
       />
       <h5 style={{
         marginTop: '10rem',
         marginLeft: '10rem'
       }}>More are on the way...</h5>
     </div>
  )
}

export default About;
