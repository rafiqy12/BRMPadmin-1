import { useMemo, useState } from "react";
import { Plus, Search, Trash2, Pencil } from "lucide-react";

const sampleSeeds = [
    {
        no: 1,
        fotoUrl: "https://images.unsplash.com/photo-1524591902995-a986c4cc0367?auto=format&fit=crop&w=72&q=80",
        nama: "Padi Cihérang",
        masuk: 1250,
        keluar: 500,
        tersedia: 750,
        harga: 12500,
    },
    {
        no: 2,
        fotoUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=72&q=80",
        nama: "Jagung Hibrida",
        masuk: 800,
        keluar: 320,
        tersedia: 480,
        harga: 15000,
    },
    {
        no: 3,
        fotoUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=72&q=80",
        nama: "Kedelai Anjasmoro",
        masuk: 600,
        keluar: 180,
        tersedia: 420,
        harga: 14200,
    },
    {
        no: 4,
        fotoUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=72&q=80",
        nama: "Cabai Rawit",
        masuk: 450,
        keluar: 150,
        tersedia: 300,
        harga: 85000,
    },
    {
        no: 5,
        fotoUrl: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=72&q=80",
        nama: "Bawang Merah",
        masuk: 400,
        keluar: 60,
        tersedia: 340,
        harga: 45000,
    },
];

export default function BenihPage({ activeTab, onNavigate }) {
    const [search, setSearch] = useState("");
    const [rows, setRows] = useState(sampleSeeds);
    const [editingId, setEditingId] = useState(null);
    const [editValues, setEditValues] = useState({ nama: "", masuk: "", keluar: "", tersedia: "", harga: "" });

    const title = activeTab === "benih-update-benih" ? "Update Benih" : "Jenis Benih";
    const breadcrumb = activeTab === "benih-update-benih" ? "Data Benih / Update Benih" : "Data Benih / Jenis Benih";

    const filteredRows = useMemo(() => rows.filter((row) => row.nama.toLowerCase().includes(search.toLowerCase())), [search, rows]);

    function startEdit(row) {
        setEditingId(row.no);
        setEditValues({ nama: row.nama, masuk: row.masuk, keluar: row.keluar, tersedia: row.tersedia, harga: row.harga });
    }

    function saveEdit() {
        setRows((prev) =>
            prev.map((row) =>
                row.no === editingId
                    ? {
                          ...row,
                          ...editValues,
                          masuk: Number(editValues.masuk),
                          keluar: Number(editValues.keluar),
                          tersedia: Number(editValues.tersedia),
                          harga: Number(editValues.harga),
                      }
                    : row,
            ),
        );
        setEditingId(null);
    }

    function deleteRow(no) {
        if (!window.confirm("Hapus data benih?")) return;
        setRows((prev) => prev.filter((row) => row.no !== no));
    }

    return (
        <div className="mx-auto max-w-7xl space-y-6">
            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">{breadcrumb}</p>
                        <h1 className="mt-2 text-3xl font-black text-slate-900">{title}</h1>
                    </div>
                    <button onClick={() => onNavigate?.("benih-tambah-jenis-benih")} className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">
                        <Plus size={14} /> Tambah
                    </button>
                </div>
            </section>

            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                        {['Copy', 'Excel', 'PDF'].map((label) => (
                            <button key={label} className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="flex-1 max-w-xs">
                        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                            <Search size={16} />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari benih..."
                                className="w-full bg-transparent text-sm text-slate-900 outline-none"
                            />
                        </label>
                    </div>
                </div>

                <div className="mt-6 overflow-x-auto rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                    <table className="min-w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="px-4 py-4 text-left font-semibold">#</th>
                                <th className="px-4 py-4 text-left font-semibold">Foto</th>
                                <th className="px-4 py-4 text-left font-semibold">Nama Benih</th>
                                <th className="px-4 py-4 text-left font-semibold text-emerald-600">Masuk</th>
                                <th className="px-4 py-4 text-left font-semibold text-red-600">Keluar</th>
                                <th className="px-4 py-4 text-left font-semibold text-sky-600">Tersedia</th>
                                <th className="px-4 py-4 text-left font-semibold text-emerald-600">Harga/Kg</th>
                                <th className="px-4 py-4 text-left font-semibold">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {filteredRows.map((row) => (
                                <tr key={row.no} className="border-t border-slate-100 hover:bg-slate-50">
                                    <td className="px-4 py-4 text-slate-900">{row.no}</td>
                                    <td className="px-4 py-4">
                                        <img src={row.fotoUrl} alt={row.nama} className="h-14 w-14 rounded-2xl object-cover" />
                                    </td>
                                    <td className="px-4 py-4 font-medium text-slate-900">{row.nama}</td>
                                    <td className="px-4 py-4 text-slate-900">{row.masuk.toLocaleString()}</td>
                                    <td className="px-4 py-4 text-slate-900">{row.keluar.toLocaleString()}</td>
                                    <td className="px-4 py-4 text-slate-900">{row.tersedia.toLocaleString()}</td>
                                    <td className="px-4 py-4 text-slate-900">{row.harga.toLocaleString()}</td>
                                    <td className="px-4 py-4 space-x-2">
                                        <button onClick={() => startEdit(row)} className="rounded-2xl border border-brand-200 bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700 transition hover:bg-brand-100">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteRow(row.no)} className="rounded-2xl bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700">
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500">
                        <span className="text-slate-700">Showing 1 to {filteredRows.length} of {rows.length} entries</span>
                        <div className="flex items-center gap-2">
                            <button className="rounded-2xl border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">Sebelumnya</button>
                            <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">1</span>
                            <button className="rounded-2xl border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">Selanjutnya</button>
                        </div>
                    </div>
                </section>

            {editingId !== null ? (
                <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-black text-slate-900">Edit Data Benih</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            Nama Benih
                            <input
                                value={editValues.nama}
                                onChange={(e) => setEditValues((prev) => ({ ...prev, nama: e.target.value }))}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                            />
                        </label>
                        <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            Masuk
                            <input
                                type="number"
                                value={editValues.masuk}
                                onChange={(e) => setEditValues((prev) => ({ ...prev, masuk: e.target.value }))}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                            />
                        </label>
                        <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            Keluar
                            <input
                                type="number"
                                value={editValues.keluar}
                                onChange={(e) => setEditValues((prev) => ({ ...prev, keluar: e.target.value }))}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                            />
                        </label>
                        <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            Tersedia
                            <input
                                type="number"
                                value={editValues.tersedia}
                                onChange={(e) => setEditValues((prev) => ({ ...prev, tersedia: e.target.value }))}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                            />
                        </label>
                        <label className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                            Harga/Kg
                            <input
                                type="number"
                                value={editValues.harga}
                                onChange={(e) => setEditValues((prev) => ({ ...prev, harga: e.target.value }))}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none"
                            />
                        </label>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 justify-end">
                        <button onClick={() => setEditingId(null)} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                            Batal
                        </button>
                        <button onClick={saveEdit} className="rounded-2xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
                            Simpan Perubahan
                        </button>
                    </div>
                </section>
            ) : null}
        </div>
    );
}
