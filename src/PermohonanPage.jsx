import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock3, Filter, Search, Sparkles } from "lucide-react";

const defaultSummary = [
    { label: "Total aduan", value: "124", detail: "+8% vs bulan lalu" },
    { label: "Butuh review", value: "17", detail: "3 prioritas tinggi" },
    { label: "Diterima", value: "81", detail: "Tersedia untuk tindak lanjut" },
    { label: "Selesai", value: "26", detail: "Disetujui minggu ini" },
];

const defaultColumns = [
    { key: "no", label: "#" },
    { key: "proses", label: "Proses", render: (row) => <span className={row.prosesClassName ?? "font-semibold text-emerald-600"}>{row.proses}</span> },
    { key: "kode", label: "Kode" },
    { key: "nama", label: "Nama" },
    { key: "pekerjaan", label: "Pekerjaan" },
    { key: "tipe", label: "Tipe" },
    { key: "email", label: "Email" },
    { key: "hp", label: "HP" },
    { key: "tanggal", label: "Tanggal" },
    { key: "caraMemperoleh", label: "Cara Memperoleh" },
    { key: "caraMendapatkan", label: "Cara Mendapatkan" },
];

const defaultRows = [
    {
        no: 1,
        proses: "Selesai",
        prosesClassName: "font-semibold text-emerald-600",
        kode: "53608401",
        nama: "dea",
        pekerjaan: "pegawai",
        tipe: "Perorangan",
        email: "dea@gmail.com",
        hp: "081297732826",
        tanggal: "20-07-2024 08:27",
        caraMemperoleh: "Mendapatkan salinan hardcopy",
        caraMendapatkan: "Pakai Kurir",
    },
];

const statusStyles = {
    Selesai: "bg-emerald-100 text-emerald-700",
    Diproses: "bg-amber-100 text-amber-700",
    Review: "bg-violet-100 text-violet-700",
    Diterima: "bg-sky-100 text-sky-700",
};

export default function PermohonanPage({ onNavigate, summary = defaultSummary, rows = defaultRows, columns = defaultColumns, title = "Data Aduan", subtitle = "Pantau status, prioritas, dan alur verifikasi permohonan dari satu halaman yang terstruktur.", breadcrumb = "Permohonan Layanan > Permohonan Layanan Masuk" }) {
    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
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

            <article className="rounded-[2rem] border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Prioritas hari ini</p>
                        <h2 className="mt-2 text-xl font-black text-slate-900">Yang perlu ditindaklanjuti</h2>
                    </div>
                    <div className="rounded-full bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-700">Harus dilihat lebih dulu</div>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {[
                        { title: "Review dokumen lengkap", detail: "2 permohonan belum memiliki lampiran lengkap." },
                        { title: "Verifikasi data pemohon", detail: "3 data memerlukan koreksi sebelum diterima." },
                    ].map((item) => (
                        <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-amber-100">
                            <div className="flex items-center gap-2">
                                <Clock3 size={16} className="text-amber-700" />
                                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </article>

            <section className="grid gap-6">
                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Daftar permohonan</p>
                            <h2 className="mt-2 text-xl font-black text-slate-900">Catatan terbaru</h2>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                            <span className="rounded-full bg-slate-100 px-3 py-2">Showing {rows.length} entries</span>
                            <span className="rounded-full bg-slate-100 px-3 py-2">Column visibility</span>
                        </div>
                    </div>

                    <div className="mt-5 overflow-x-auto rounded-[1.5rem] border border-slate-200">
                        <table className="min-w-full divide-y divide-slate-200 text-sm">
                            <thead className="bg-slate-50">
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column.key} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-slate-600">
                                            {column.label}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {rows.map((row, index) => (
                                    <tr key={row.kode ?? row.id ?? index} className="hover:bg-slate-50">
                                        {columns.map((column) => {
                                            const value = row[column.key];
                                            if (column.render) {
                                                return (
                                                    <td key={column.key} className="whitespace-nowrap px-4 py-3 text-slate-700">
                                                        {column.render(row, index)}
                                                    </td>
                                                );
                                            }

                                            if (column.key === "proses") {
                                                const badgeClassName = statusStyles[value] ?? "bg-slate-100 text-slate-700";
                                                return (
                                                    <td key={column.key} className="whitespace-nowrap px-4 py-3">
                                                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${badgeClassName}`}>{value}</span>
                                                    </td>
                                                );
                                            }

                                            return (
                                                <td key={column.key} className="whitespace-nowrap px-4 py-3 text-slate-700">
                                                    {value}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </article>

                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Ringkasan</p>
                    <h2 className="mt-2 text-xl font-black text-slate-900">Status pelayanan</h2>
                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                        <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                            <CheckCircle2 size={18} className="text-emerald-700" />
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Rata-rata respon</p>
                                <p className="text-sm text-slate-500">2 jam 15 menit</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-sky-50 p-4">
                            <Sparkles size={18} className="text-sky-700" />
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Kualitas pelayanan</p>
                                <p className="text-sm text-slate-500">94% puas terhadap proses</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl bg-violet-50 p-4">
                            <CheckCircle2 size={18} className="text-violet-700" />
                            <div>
                                <p className="text-sm font-semibold text-slate-900">Antrian aktif</p>
                                <p className="text-sm text-slate-500">12 permohonan menunggu validasi</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
