import List from "../list/page";

const ListPage = () => {
    return (
        <div>
            <p>Leads</p>
            <input type="text" placeholder="Search" />
            <div>
                <List />
            </div>
        </div>
    )
}

export default ListPage;