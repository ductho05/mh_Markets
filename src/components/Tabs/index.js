"use client"
import React from 'react'

function Tabs({ tabs, components }) {

    const [currentTab, setCurrentTab] = React.useState(0)

    return (
        <div>

            <div className='bg-transparent flex items-center'>
                {
                    tabs.map((tab, index) => (
                        <div onClick={() => setCurrentTab(index)} key={tab} className='relative flex items-center'>
                            {
                                index !== 0 &&
                                <div style={{
                                    width: "30px",
                                    borderBottom: `30px solid ${index === currentTab ? "#fff" : "#5e5e5e"}`,
                                    borderLeft: "30px solid transparent",
                                    zIndex: `${index === currentTab ? "3" : "1"}`,
                                    position: "absolute",
                                    left: "-23%",
                                }}></div>
                            }
                            <div
                                className='cursor-pointer flex justify-center items-center'
                                style={{
                                    width: "100px",
                                    height: "30px",
                                    backgroundColor: `${index === currentTab ? "#fff" : "#5e5e5e"}`,
                                    borderTopLeftRadius: `${index === 0 ? "12px" : "0"}`
                                }}
                            >
                                <p className={`${index === currentTab ? "text-[#333]" : "text-white"} text-[13px] font-[500]`}>
                                    {tab}
                                </p>
                            </div>
                            <div style={{
                                width: "30px",
                                borderBottom: `30px solid ${index === currentTab ? "#fff" : "#5e5e5e"}`,
                                borderRight: "30px solid transparent",
                                zIndex: "2"
                            }}></div>
                        </div>
                    ))
                }
            </div>
            {
                components.map((component, id) => (
                    <div key={id} className={`${id === currentTab ? "block" : "hidden"}`}>
                        {component}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs