import Select from "../inputs/Select";

export default function StatusBar() {
    const activeOrders = 0;
    return (
        <div className="white-card p-5 row justify-between items-center gap-2 flex-grow-[2]">
            <span className="text-xl">
                <b>Active Orders</b>&nbsp;-
                <span className="text-slate-400"> {activeOrders}</span>
            </span>
            <Select />
        </div>
    );
}
