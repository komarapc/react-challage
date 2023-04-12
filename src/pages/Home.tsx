import Navbar, { NavbarBrand } from "../components/ui/navbar";

import BodyWrapper from "../components/ui/wrapper";
import { Link } from "react-router-dom";
import { SeeMoreButton } from "../components/atomic/button";
import topics from "../data/topics.json";

function Home() {
  return (
    <>
      <BodyWrapper>
        <Navbar>
          <NavbarBrand>React Fundamental</NavbarBrand>
        </Navbar>
        <div className="w-full">
          <div className="container mx-auto p-5 my-10 flex flex-col">
            <div className="p-5 bg-white rounded-lg dark:bg-neutral-800">
              <h1 className="text-2xl font-semibold">Topics</h1>
              <div className="flex my-5 w-full flex-wrap relative">
                {topics.map((topic, index: number) => (
                  <div className="w-full md:w-3/12 p-1 my-2 relative hover:-top-2  rounded-lg transition duration-300 ease-in-out">
                    <div className="bg-neutral-100 rounded-lg dark:bg-neutral-700 p-5 hover:shadow-lg">
                      <h1 className="text-lg font-semibold dark:text-neutral-200">
                        {topic.title}
                      </h1>
                      <p className="text-sm">
                        {topic.description}
                        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                          {topic.courses.map((course, i: number) => (
                            <li key={i}>{course.title}</li>
                          ))}
                        </ul>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto p-5 flex flex-col">
            <div className="p-5 bg-white rounded-lg dark:bg-neutral-800 flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Challenges</h1>
              <div className="">
                <Link
                  to={"/challenge"}
                  className="text-white bg-indigo-500 px-6 py-3 inline-block rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out"
                >
                  See Challange
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BodyWrapper>
    </>
  );
}

export default Home;
