import moment from "moment"

const SingleCourseItem = ({position,company,createdAt})=>{


    const date = moment(createdAt).format('MMM Do, YYYY')

    return <div class="flex items-center justify-between border-b-2 p-4">

    <div class="info">
        <h3>{position}</h3>
        <p class="m-0 fs-14 clr-gray">by: {company}</p>
    </div>

    <kbd className="kbd kbd-sm">{date}</kbd>

</div>
}

export default SingleCourseItem