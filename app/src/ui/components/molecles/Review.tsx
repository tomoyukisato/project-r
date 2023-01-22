function padZero(x: number, digits: number) {
    return x.toString().padStart(digits, '0');
}

function Datetime(date: any){
    return (
        <time dateTime={date.toString()}>
            {padZero(date.getFullYear(), 4)}-{padZero(date.getMonth() + 1, 2)}-
            {padZero(date.getDate(), 2)} {padZero(date.getHours(), 2)}:
            {padZero(date.getMinutes(), 2)}
        </time>
    );
}

type Props = {
    review: ReviewProps
};

export const Review = (prop: Props) => {
    return (
    <article className="message is-dark">
        <div className="message-body p-2 p1-3">
            <h3 className="title is-5 mb-0">{prop.review.title}</h3>
            <p className="mt-2 mb-2">{prop.review.comment}</p>
            <p className="has-text-right">
                <small>
                    by {prop.review.user.nikname}さん
                    <br />
                    <Datetime date={new Date(prop.review.createdAt)} />
                </small>
            </p>
        </div>
    </article>
    );
}