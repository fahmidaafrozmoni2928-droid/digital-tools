import React, { use } from "react";
import Card from "../Card/Card";

const ToolsCards = ({toolsPromise}) => {
    const tools = use(toolsPromise);
    console.log(tools);
    return (
        <div className="pt-15 ">
            <div className="text-center space-y-5">
            <h2 className="text-6xl font-bold">Premium Digital Tools</h2>
            <p className="text-gray-600">Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
            </div>

            <div className="grid grid-cols-3 space-y-6 gap-x-0">
                {
                    tools.map(tool => <div className="min-h-100vh flex justify-center items-center ">
                            <Card tool={tool}></Card>
                    </div>)
                }
            </div>
        </div>
    )
}
export default ToolsCards;