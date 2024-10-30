import List from "../list/page";
import Image from "next/image";

const ListPage = () => {
    return (
        <div className="flex bg-white">
            <div className="flex flex-col w-1/4 pl-5 bg-lime-100 h-screen">
                <div className="flex flex-col basis-10/12">
                    <div className="pr-36 py-7">
                        <Image
                            src="/alma-logo.png"
                            width={308}
                            height={113}
                            alt="Alma logo"
                        />
                    </div>
                    <p className="text-slate-800 text-l font-bold mb-3 mt-5">Leads</p>
                    <p className="text-slate-800 text-l mb-3">Settings</p>
                </div>
                <div className="flex basis-1/12"><p className="text-slate-800 font-bold text-l mb-3">Admin</p></div>
                
            </div>
            <div className="flex w-3/4 pl-5">
                <div className="flex flex-col">
                <div>
                    <p className="text-slate-800 text-l font-bold mb-3 mt-5">Leads</p>
                    <div className="flex">
                        <input className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-slate-300 dark:placeholder-gray-400 text-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 mr-3" type="text" placeholder="Search" />
                        <div className="flex">
                            <select id="country" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-slate-300 dark:placeholder-gray-400 text-slate-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
                                <option value="Status">Status</option>
                                <option value="Pending">Pending</option>
                                <option value="ReachedOut">Reached Out</option>
                            </select>
                        </div>
                    </div>
                </div>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default ListPage;