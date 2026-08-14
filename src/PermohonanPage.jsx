import { ArrowLeft, ArrowUpRight, CheckCircle2, CircleDashed, Clock3, Filter, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

const defaultSummary = [
    { label: "Total aduan", value: "124", detail: "+8% vs bulan lalu" },
    { label: "Butuh review", value: "17", detail: "3 prioritas tinggi" },
    { label: "Diterima", value: "81", detail: "Tersedia untuk tindak lanjut" },
    { label: "Selesai", value: "26", detail: "Disetujui minggu ini" },
];

const defaultRows = [
    {
        no: 1,
        proses: "Selesai",
        kode: "53608401",
        nama: "dea",
        pekerjaan: "pegawai",
        tipe: "Perorangan",
        email: "dea@gmail.com",
        hp: "081297732826",
        tanggal: "20-07-2024 08:27",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Pakai Kurir",
        status: "Diterima",
    },
    {
        no: 2,
        proses: "Diproses",
        kode: "607426615",
        nama: "Diah Sulistyorini",
        pekerjaan: "mahasiswa",
        tipe: "Perorangan",
        email: "dsy.nuriyanto@gmail.com",
        hp: "082323375252",
        tanggal: "28-06-25 09:09",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Mengambil langsung",
        status: "Review",
    },
    {
        no: 3,
        proses: "Review",
        kode: "1970012002",
        nama: "COBA",
        pekerjaan: "MAHASISWA",
        tipe: "Instansi",
        email: "lobs1@fahungla.com",
        hp: "0874444-05-2025",
        tanggal: "27-05-25 04:45",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Mengambil langsung",
        status: "Diproses",
    },
    {
        no: 4,
        proses: "Selesai",
        kode: "214404124",
        nama: "Andik Susatyo",
        pekerjaan: "Pengusaha",
        tipe: "Perorangan",
        email: "andik@gmail.com",
        hp: "081249286420",
        tanggal: "15-09-25 19:30",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Pakai Kurir",
        status: "Diterima",
    },
];

const statusStyles = {
    Selesai: "bg-emerald-100 text-emerald-700",
    Diproses: "bg-amber-100 text-amber-700",
    Review: "bg-violet-100 text-violet-700",
    Diterima: "bg-sky-100 text-sky-700",
};

const defaultColumns = [
    { key: "no", label: "No" },
    { key: "proses", label: "Proses" },
    { key: "kode", label: "Kode" },
    { key: "nama", label: "Nama" },
    { key: "pekerjaan", label: "Pekerjaan" },
    { key: "tipe", label: "Tipe" },
    { key: "email", label: "Email" },
    { key: "hp", label: "HP" },
    { key: "tanggal", label: "Tanggal" },
];

export default function PermohonanPage({ onNavigate, summary = defaultSummary, rows = defaultRows, title = "Data Aduan", subtitle = "Pantau status, prioritas, dan alur verifikasi permohonan dari satu halaman yang terstruktur.", breadcrumb = "Permohonan Layanan > Permohonan Layanan Masuk" }) {
    const [selectedNo, setSelectedNo] = useState(rows[0]?.no ?? 1);
    const selectedRow = useMemo(() => rows.find((row) => row.no === selectedNo) ?? rows[0], [rows, selectedNo]);

    return (
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
            <header className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <button onClick={() => onNavigate?.("dashboard")} className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
                            <ArrowLeft size={16} />
                            Kembali ke dashboard
                        </button>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">{breadcrumb}</p>
                        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{title}</h1>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                            <Search size={16} />
                            <span>Cari permohonan...</span>
                        </label>
                        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700">
                            <Filter size={16} />
                            Filter
                        </button>
                        <button className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                            <ArrowUpRight size={16} />
                            Import data
                        </button>
                    </div>
                </div>
            </header>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {summary.map((item) => (
                    <article key={item.label} className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">{item.label}</p>
                        <p className="mt-3 text-3xl font-black tracking-tight text-slate-900">{item.value}</p>
                        <p className="mt-2 text-sm text-emerald-600">{item.detail}</p>
                    </article>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.5fr_1.1fr_0.7fr]">
                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Data Aduan</p>
                            <h2 className="mt-2 text-xl font-black text-slate-900">Daftar permohonan masuk</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                            <span className="rounded-full bg-slate-100 px-3 py-2">{rows.length} data</span>
                            <span className="rounded-full bg-slate-100 px-3 py-2">Column visibility</span>
                        </div>
                    </div>

                    <div className="mt-5 overflow-x-auto rounded-[1.5rem] border border-slate-200">
                        <table className="min-w-full divide-y divide-slate-200 text-sm">
                            <thead className="bg-slate-50">
                                <tr>
                                    {defaultColumns.map((column) => (
                                        <th key={column.key} className="whitespace-nowrap px-3 py-3 text-left font-semibold text-slate-600">
                                            {column.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {rows.map((row) => (
                                    <tr key={row.no} onClick={() => setSelectedNo(row.no)} className={`cursor-pointer transition ${selectedNo === row.no ? "bg-emerald-50" : "hover:bg-slate-50"}`}>
                                        <td className="px-3 py-3 text-slate-600">{row.no}</td>
                                        <td className="px-3 py-3">
                                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${statusStyles[row.proses] ?? "bg-slate-100 text-slate-700"}`}>{row.proses}</span>
                                        </td>
                                        <td className="px-3 py-3 text-slate-700">{row.kode}</td>
                                        <td className="px-3 py-3 font-medium text-slate-900">{row.nama}</td>
                                        <td className="px-3 py-3 text-slate-700">{row.pekerjaan}</td>
                                        <td className="px-3 py-3 text-slate-700">{row.tipe}</td>
                                        <td className="px-3 py-3 text-slate-700">{row.email}</td>
                                        <td className="px-3 py-3 text-slate-700">{row.hp}</td>
                                        <td className="px-3 py-3 text-slate-700">{row.tanggal}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </article>

                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Edit</p>
                    <h2 className="mt-2 text-xl font-black text-slate-900">Edit Permohonan Layanan</h2>

                    <div className="mt-5 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm text-slate-700">
                                Kode Permohonan
                                <input value={selectedRow?.kode ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                            <label className="block text-sm text-slate-700">
                                Nama Pemohon
                                <input value={selectedRow?.nama ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm text-slate-700">
                                Pekerjaan
                                <input value={selectedRow?.pekerjaan ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                            <label className="block text-sm text-slate-700">
                                Tipe
                                <input value={selectedRow?.tipe ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm text-slate-700">
                                Email
                                <input value={selectedRow?.email ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                            <label className="block text-sm text-slate-700">
                                HP
                                <input value={selectedRow?.hp ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                        </div>

                        <label className="block text-sm text-slate-700">
                            Cara Memperoleh
                            <input value={selectedRow?.caraMemperoleh ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                        </label>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="block text-sm text-slate-700">
                                Status Proses
                                <select defaultValue={selectedRow?.proses ?? "Diproses"} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-brand-400">
                                    <option value="Diproses">Diproses</option>
                                    <option value="Review">Review</option>
                                    <option value="Diterima">Diterima</option>
                                    <option value="Selesai">Selesai</option>
                                </select>
                            </label>
                            <label className="block text-sm text-slate-700">
                                Tanggal
                                <input value={selectedRow?.tanggal ?? ""} readOnly className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none" />
                            </label>
                        </div>

                        <label className="block text-sm text-slate-700">
                            Keterangan
                            <textarea defaultValue={selectedRow?.status ?? ""} rows={4} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-brand-400" />
                        </label>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">Batal</button>
                            <button className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Simpan Perubahan</button>
                        </div>
                    </div>
                </article>

                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Status</p>
                    <h2 className="mt-2 text-xl font-black text-slate-900">Ringkasan proses</h2>

                    <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <div className="flex items-center gap-2 text-emerald-700">
                                <CheckCircle2 size={18} />
                                <span className="text-sm font-semibold">Sudah diverifikasi</span>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-900">81</p>
                        </div>

                        <div className="rounded-2xl bg-amber-50 p-4">
                            <div className="flex items-center gap-2 text-amber-700">
                                <Clock3 size={18} />
                                <span className="text-sm font-semibold">Menunggu review</span>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-900">17</p>
                        </div>

                        <div className="rounded-2xl bg-violet-50 p-4">
                            <div className="flex items-center gap-2 text-violet-700">
                                <CircleDashed size={18} />
                                <span className="text-sm font-semibold">Proses aktif</span>
                            </div>
                            <p className="mt-2 text-3xl font-black text-slate-900">12</p>
                        </div>

                        <div className="rounded-2xl bg-sky-50 p-4">
                            <div className="flex items-center gap-2 text-sky-700">
                                <Sparkles size={18} />
                                <span className="text-sm font-semibold">Kualitas layanan</span>
                            </div>
                            <p className="mt-2 text-xl font-black text-slate-900">94% puas</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
