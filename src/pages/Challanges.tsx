import { Fragment, useState } from "react";

import Helmet from "react-helmet";

function ChallengePage() {
  const [data, setData] = useState<Array<string>>([]);
  const [showEditValues, setShowEditValues] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const actions = {
    addItems: (index: number) => {
      const newData = [...data];
      newData.splice(index + 1, 0, "_");
      setData(newData);
    },
    changeValues(index: number, value: string) {
      const newData = [...data];
      newData[index] = value ? value : "_";
      setData(newData);
    },
    showForm: (index: number) => {
      setShowEditValues(true);
      setSelectedIndex(index);
    },
    onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setShowEditValues(false);
        setSelectedIndex(0);
      }
    },
  };

  return (
    <Fragment>
      <Helmet>
        <title>React Challenge</title>
      </Helmet>
      <div className="w-full min-h-screen dark:bg-neutral-950 dark:text-white flex flex-col items-center justify-center">
        <div className="container mx-auto">
          <div className="w-full flex p-10 items-center justify-center  flex-wrap">
            {data.length ? (
              <>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center my-2"
                  >
                    <div className="card">
                      {showEditValues && selectedIndex === index ? (
                        <>
                          <input
                            type="text"
                            className="w-full h-full outline-none bg-transparent text-green-500 text-4xl text-center"
                            defaultValue={item}
                            onChange={(e) =>
                              actions.changeValues(index, e.target.value)
                            }
                            onBlur={() => {
                              setShowEditValues(false);
                              setSelectedIndex(0);
                            }}
                            onKeyDown={(
                              e: React.KeyboardEvent<HTMLInputElement>
                            ) => actions.onPressEnter(e)}
                            autoFocus={true}
                          />
                        </>
                      ) : (
                        <span onClick={() => actions.showForm(index)}>
                          {item}
                        </span>
                      )}
                    </div>
                    <div
                      className="w-5 h-32 hover:bg-green-800 cursor-pointer transition duration-200 ease-in-out"
                      onClick={() => actions.addItems(index)}
                    >
                      &nbsp;
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="card" onClick={() => actions.addItems(0)}>
                  <span>+</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ChallengePage;
