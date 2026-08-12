import { useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const stockHistory = [
    { no: 1, tanggal: "09-08-2026", nama: "Padi Cihérang", jenis: "Masuk", jumlah: "+500 kg" },
    { no: 2, tanggal: "08-08-2026", nama: "Jagung Hibrida", jenis: "Keluar", jumlah: "-150 kg" },
    { no: 3, tanggal: "06-08-2026", nama: "Kedelai Anjasmoro", jenis: "Masuk", jumlah: "+300 kg" },
    { no: 4, tanggal: "05-08-2026", nama: "Bawang Merah", jenis: "Keluar", jumlah: "-50 kg" },
    { no: 5, tanggal: "03-08-2026", nama: "Cabai Rawit", jenis: "Masuk", jumlah: "+20 kg" },
];

export default function UpdateBenihPage({ onNavigate }) {
    const [filter, setFilter] = useState("Semua Jenis Benih");
    const filteredHistory = useMemo(
        () => stockHistory.filter((row) => filter === "Semua Jenis Benih" || row.nama === filter),
        [filter],
    );

    return (
        <div className="mx-auto max-w-6xl space-y-6">
            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">HOME &gt; BENIH &gt; UPDATE BENIH</p>
                <h1 className="mt-4 text-3xl font-black text-slate-900">Riwayat Update & Pergerakan Stok</h1>
            </section>

            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                        <span className="text-sm font-semibold text-slate-700">Saring Benih:</span>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none"
                        >
                            <option>Semua Jenis Benih</option>
                            <option>Padi Cihérang</option>
                            <option>Jagung Hibrida</option>
                            <option>Kedelai Anjasmoro</option>
                            <option>Bawang Merah</option>
                            <option>Cabai Rawit</option>
                        </select>
                    </div>
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 rounded-3xl bg-emerald-50 px-4 py-3 text-emerald-700">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">↑</div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Total Masuk (Bulan Ini)</p>
                            <p className="mt-2 text-2xl font-bold text-emerald-800">+2,450 kg</p>
                        </div>
                    </div>
                </article>
                <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 rounded-3xl bg-red-50 px-4 py-3 text-red-700">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-700">↓</div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-red-600">Total Keluar (Bulan Ini)</p>
                            <p className="mt-2 text-2xl font-bold text-red-700">-1,120 kg</p>
                        </div>
                    </div>
                </article>
                <article className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3 rounded-3xl bg-sky-50 px-4 py-3 text-sky-700">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">■</div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Stok Tersedia Saat Ini</p>
                            <p className="mt-2 text-2xl font-bold text-slate-900">3,060 kg</p>
                        </div>
                    </div>
                </article>
            </section>

            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-900">Riwayat Perubahan Stok</h2>
                    </div>
                    <button onClick={() => onNavigate?.("benih-tambah-update-stok")} className="inline-flex items-center justify-center rounded-2xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
                        <Plus size={16} /> Tambah Update Stok
                    </button>
                </div>

                <div className="overflow-x-auto rounded-[1.75rem] border border-slate-200 bg-slate-50 p-2">
                    <table className="min-w-full text-sm text-slate-700">
                        <thead className="bg-white text-left text-xs uppercase tracking-[0.2em] text-slate-500">
                            <tr>
                                <th className="px-4 py-3">#</th>
                                <th className="px-4 py-3">Tanggal</th>
                                <th className="px-4 py-3">Jenis Benih</th>
                                <th className="px-4 py-3">Keterangan</th>
                                <th className="px-4 py-3">Jumlah</th>
                                <th className="px-4 py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredHistory.map((row) => (
                                <tr key={row.no} className="border-t border-slate-200 bg-white hover:bg-slate-50">
                                    <td className="px-4 py-4 text-slate-800">{row.no}</td>
                                    <td className="px-4 py-4 text-slate-700">{row.tanggal}</td>
                                    <td className="px-4 py-4 font-semibold text-slate-900">{row.nama}</td>
                                    <td className="px-4 py-4">
                                        <span className={row.jenis === "Masuk" ? "inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700" : "inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"}>
                                            {row.jenis}
                                        </span>
                                    </td>
                                    <td className={row.jenis === "Masuk" ? "px-4 py-4 text-emerald-700 font-semibold" : "px-4 py-4 text-red-600 font-semibold"}>{row.jumlah}</td>
                                    <td className="px-4 py-4">
                                        <button className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-red-100 bg-red-50 text-red-600 transition hover:bg-red-100">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
