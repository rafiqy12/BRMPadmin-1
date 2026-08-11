import { ArrowLeft, CheckCircle2, Edit3, Eye, FileText, Filter, Plus, Search, Trash2 } from "lucide-react";

const sampleRows = [
    { no: 1, name: "Tanah / Soil" },
    { no: 2, name: "Pupuk Organik" },
    { no: 3, name: "Tanaman / Daun" },
    { no: 4, name: "Benih Padi" },
    { no: 5, name: "Air Irigasi" },
];

const incomingRows = [
    { no: 1, tanggal: "11-08-2026", nama: "Ajiman", noSPK: "A177/2026", kodeLab: "A-444", jenisAnalisis: "analisis", status: "Selesai" },
    { no: 2, tanggal: "11-08-2026", nama: "coba", noSPK: "A146/2025", kodeLab: "21", jenisAnalisis: "soil", status: "Selesai" },
    { no: 3, tanggal: "10-08-2026", nama: "PT. Delima Unggul", noSPK: "B174/2026", kodeLab: "23", jenisAnalisis: "Kadar Air & Kesesuaian", status: "Proses" },
];

const finishedRows = [
    { no: 1, tanggal: "11-08-2026", nama: "Ajiman", noSPK: "A177/2026", kodeLab: "A-444", jenisAnalisis: "analisis", status: "Selesai", fileLaporan: "PDF / DOC" },
    { no: 2, tanggal: "11-08-2026", nama: "coba", noSPK: "A146/2025", kodeLab: "21", jenisAnalisis: "soil", status: "Selesai", fileLaporan: "Tidak ada" },
];

const tabMeta = {
    "laboratorium-jenis-sampel": {
        title: "Kelola Jenis Sampel",
        breadcrumb: "Laboratorium / Jenis Sampel",
        description: "Tambah, ubah, dan hapus jenis sampel yang digunakan di laboratorium.",
    },
    "laboratorium-masuk": {
        title: "Data Masuk Laboratorium",
        breadcrumb: "Laboratorium / Masuk",
        description: "Kelola sampel yang sudah diterima dan sedang diproses.",
    },
    "laboratorium-laporan-selesai": {
        title: "Laporan Lab Selesai",
        breadcrumb: "Laboratorium / Laporan Selesai",
        description: "Daftar laporan hasil sampel yang telah selesai diproses.",
    },
};

const statusStyles = {
    Selesai: "bg-emerald-100 text-emerald-700",
    Proses: "bg-amber-100 text-amber-700",
};

const monitoringStats = [
    { label: "Masuk", value: 24, color: "bg-sky-500", textColor: "text-sky-700", lightColor: "bg-sky-50" },
    { label: "Proses", value: 12, color: "bg-amber-500", textColor: "text-amber-700", lightColor: "bg-amber-50" },
    { label: "Selesai", value: 31, color: "bg-emerald-500", textColor: "text-emerald-700", lightColor: "bg-emerald-50" },
];

function MonitoringChart() {
    const total = monitoringStats.reduce((sum, item) => sum + item.value, 0);

    return (
        <article className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Monitoring Lab</p>
                    <h2 className="mt-2 text-xl font-black text-slate-900">Status sampel masuk, proses, dan selesai</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Ringkasan cepat untuk memantau beban kerja laboratorium hari ini.</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-500">Total {total} sampel</div>
            </div>

            <div className="mt-5 rounded-[1.25rem] bg-slate-50 p-4">
                <div className="flex h-4 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                    {monitoringStats.map((item) => (
                        <div key={item.label} className={item.color} style={{ width: `${(item.value / total) * 100}%` }} />
                    ))}
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {monitoringStats.map((item) => (
                        <div key={item.label} className={`rounded-2xl ${item.lightColor} p-4`}>
                            <div className="flex items-center justify-between gap-3">
                                <span className={`text-sm font-semibold ${item.textColor}`}>{item.label}</span>
                                <span className={`text-2xl font-black ${item.textColor}`}>{item.value}</span>
                            </div>
                            <p className="mt-2 text-xs text-slate-500">{Math.round((item.value / total) * 100)}% dari total sampel</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}

function PageHeader({ current, onNavigate }) {
    return (
        <header className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
            <button onClick={() => onNavigate?.("dashboard")} className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
                <ArrowLeft size={16} />
                Kembali ke dashboard
            </button>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">{current.breadcrumb}</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{current.title}</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{current.description}</p>
        </header>
    );
}

function SearchBar({ placeholder, actionLabel }) {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                <Search size={16} />
                <span>{placeholder}</span>
            </label>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700">
                <Filter size={16} />
                Filter
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                <FileText size={16} />
                {actionLabel}
            </button>
        </div>
    );
}

function StatusPill({ status }) {
    return <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[status] ?? "bg-slate-100 text-slate-700"}`}>{status}</span>;
}

export default function LaboratoriumPage({ activeTab, onNavigate }) {
    const current = tabMeta[activeTab] ?? tabMeta["laboratorium-jenis-sampel"];

    if (activeTab !== "laboratorium-jenis-sampel") {
        return (
            <div className="mx-auto flex max-w-7xl flex-col gap-6">
                <PageHeader current={current} onNavigate={onNavigate} />
                <MonitoringChart />

                {activeTab === "laboratorium-masuk" ? (
                    <>
                        <section className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                            <div className="grid gap-4 md:grid-cols-[1.4fr_0.5fr_0.3fr_0.3fr]">
                                <label className="block text-sm font-medium text-slate-700">
                                    Pilih Bulan
                                    <input type="text" defaultValue="Agustus" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:bg-white" />
                                </label>
                                <label className="block text-sm font-medium text-slate-700">
                                    Tahun
                                    <input type="text" defaultValue="2026" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:bg-white" />
                                </label>
                                <div className="flex items-end">
                                    <button className="w-full rounded-2xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600">Cari Data</button>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                                    <span className="rounded-full bg-slate-100 px-3 py-2">Copy</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-2">Excel</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-2">PDF</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-2">Column visibility</span>
                                </div>
                                <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                                    <Search size={16} />
                                    <span>Cari data...</span>
                                </label>
                            </div>

                            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-slate-50 text-slate-600">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">NO</th>
                                            <th className="px-4 py-3 text-left font-semibold">TANGGAL</th>
                                            <th className="px-4 py-3 text-left font-semibold">NAMA PELANGGAN</th>
                                            <th className="px-4 py-3 text-left font-semibold">NO. SPK</th>
                                            <th className="px-4 py-3 text-left font-semibold">KODE LAB</th>
                                            <th className="px-4 py-3 text-left font-semibold">JENIS ANALISIS</th>
                                            <th className="px-4 py-3 text-left font-semibold">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {incomingRows.map((row) => (
                                            <tr key={row.no} className="hover:bg-slate-50">
                                                <td className="px-4 py-3 text-slate-600">{row.no}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.tanggal}</td>
                                                <td className="px-4 py-3 font-medium text-slate-900">{row.nama}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.noSPK}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.kodeLab}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.jenisAnalisis}</td>
                                                <td className="px-4 py-3">
                                                    <StatusPill status={row.status} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </>
                ) : activeTab === "laboratorium-laporan-selesai" ? (
                    <>
                        <section className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                            <div className="grid gap-4 md:grid-cols-[1.4fr_0.5fr_0.3fr_0.3fr]">
                                <label className="block text-sm font-medium text-slate-700">
                                    Pilih Bulan
                                    <input type="text" defaultValue="Agustus" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:bg-white" />
                                </label>
                                <label className="block text-sm font-medium text-slate-700">
                                    Tahun
                                    <input type="text" defaultValue="2026" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:bg-white" />
                                </label>
                                <div className="flex items-end">
                                    <button className="w-full rounded-2xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600">Filter Laporan</button>
                                </div>
                            </div>
                        </section>

                        <section className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                                    <span className="rounded-full bg-slate-100 px-3 py-2">Copy</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-2">Excel</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-2">PDF</span>
                                    <span className="rounded-full bg-slate-100 px-3 py-2">Column visibility</span>
                                </div>
                                <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                                    <Search size={16} />
                                    <span>Cari data...</span>
                                </label>
                            </div>

                            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-slate-50 text-slate-600">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">NO</th>
                                            <th className="px-4 py-3 text-left font-semibold">TANGGAL</th>
                                            <th className="px-4 py-3 text-left font-semibold">NAMA PELANGGAN</th>
                                            <th className="px-4 py-3 text-left font-semibold">NO. SPK</th>
                                            <th className="px-4 py-3 text-left font-semibold">KODE LAB</th>
                                            <th className="px-4 py-3 text-left font-semibold">JENIS ANALISIS</th>
                                            <th className="px-4 py-3 text-left font-semibold">STATUS</th>
                                            <th className="px-4 py-3 text-left font-semibold">FILE LAPORAN</th>
                                            <th className="px-4 py-3 text-left font-semibold">AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {finishedRows.map((row) => (
                                            <tr key={row.no} className="hover:bg-slate-50">
                                                <td className="px-4 py-3 text-slate-600">{row.no}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.tanggal}</td>
                                                <td className="px-4 py-3 font-medium text-slate-900">{row.nama}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.noSPK}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.kodeLab}</td>
                                                <td className="px-4 py-3 text-slate-700">{row.jenisAnalisis}</td>
                                                <td className="px-4 py-3">
                                                    <StatusPill status={row.status} />
                                                </td>
                                                <td className="px-4 py-3 text-slate-700">{row.fileLaporan}</td>
                                                <td className="px-4 py-3">
                                                    <div className="flex gap-2">
                                                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 transition hover:bg-emerald-200">
                                                            <Eye size={14} />
                                                        </button>
                                                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-100 text-sky-700 transition hover:bg-sky-200">
                                                            <FileText size={14} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </>
                ) : null}
            </div>
        );
    }

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <header className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">{current.breadcrumb}</p>
                <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{current.title}</h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{current.description}</p>
            </header>

            <MonitoringChart />

            <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <article className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-black text-slate-900">Tambah Jenis Sampel Baru</h2>
                    <div className="mt-5 space-y-4">
                        <label className="block text-sm font-medium text-slate-700">
                            Nama Jenis Sampel
                            <input type="text" placeholder="Contoh: Pupuk NPK" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:bg-white" />
                        </label>
                        <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                            <Plus size={16} />
                            Simpan Jenis Sampel
                        </button>
                    </div>
                </article>

                <article className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-black text-slate-900">Daftar Jenis Sampel Terdaftar</h2>
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                        <table className="min-w-full text-sm">
                            <thead className="bg-slate-50 text-slate-600">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">NO</th>
                                    <th className="px-4 py-3 text-left font-semibold">NAMA JENIS SAMPEL</th>
                                    <th className="px-4 py-3 text-right font-semibold">AKSI</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                {sampleRows.map((row) => (
                                    <tr key={row.no} className="hover:bg-slate-50">
                                        <td className="px-4 py-3 text-slate-600">{row.no}</td>
                                        <td className="px-4 py-3 font-medium text-slate-900">{row.name}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-end gap-2">
                                                <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 text-amber-600 transition hover:bg-amber-200">
                                                    <Edit3 size={14} />
                                                </button>
                                                <button className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-100 text-rose-600 transition hover:bg-rose-200">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </article>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                {[
                    { title: "Tersedia", value: "5 jenis" },
                    { title: "Aktif hari ini", value: "12 input" },
                    { title: "Butuh validasi", value: "2 jenis" },
                ].map((item) => (
                    <article key={item.title} className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">{item.title}</p>
                        <p className="mt-2 text-2xl font-black text-slate-900">{item.value}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}
