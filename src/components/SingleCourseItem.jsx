import moment from "moment"

const SingleCourseItem = ({position,company,createdAt})=>{


    const date = moment(createdAt).format('MMM Do, YY')

    return <div className="flex items-center justify-between border-b-2 p-2">

    <div>
        <h3 className="font-semibold">{position}</h3>
        <p className="text-md text-gray-600">by: {company}</p>
    </div>

    <kbd className="kbd kbd-sm">{date}</kbd>

</div>
}

export default SingleCourseItem