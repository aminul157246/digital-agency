import Image from "next/image";


async function getData(slug) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const BlogDetails = async ({params}) => {

    const data = await getData(params.slug)
    // console.log(data);
    
    return (
        <div>
            <div>
                <Image src="https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg" width={300} height={300} alt="blog_img"/>
            </div>
            <div>
                <h2>Title : </h2>
                <p>Description : </p>
            </div>
        </div>
    );
};

export default BlogDetails;