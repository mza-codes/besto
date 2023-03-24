import Select from "../inputs/Select";

export default function StatusBar() {
    const activeOrders = 0;
    return (
        <div className="white-card p-3 row justify-between flex-grow-[2]">
            <span className="text-2xl">
                Active Orders - <b className="text-slate-400">{activeOrders} ($0)</b>
            </span>
            <Select />
        </div>
    );
}
