import Image from "next/image";
import Link from "next/link";


async function getData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const BlogPage = async () => {

    const data = await getData()
    // console.log(data);

    return (
        <div>
            {
                data.map(item => <Link href='/blog/testID' key={item.id}>
                    <div className="flex justify-center items-center mt-4" >
                    <div>
                        <Image src="https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg" width={300} height={300} alt="blog_img" />
                    </div>
                    <div>
                        <h2>Title :{item.title} </h2>
                        <p>Description : {item.body} </p>
                    </div>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default BlogPage;