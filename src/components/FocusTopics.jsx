const FocusTopics = (topics) => {
    let elements = [];
    for (let index = 1; index <= topics.topics; index++) {
        elements.push(
            <div key={index} className="pt-2.5 ml-4 text-gray-400 flex"> 
                <div className="grow">{index}. Focus Topics {index}  </div> 
                <div className="text-gray-50 bg-sky-600 rounded-xl px-1"> score 1 </div>
            </div>
        );
    }
    return (
        <div className="">
            {elements}
            <div className="flex items-center">
                <p className="text-sm text-sky-500 px-2">See All </p>
                <span>{`>`}</span>
            </div>
            
        </div>
    );
}

export default FocusTopics;
