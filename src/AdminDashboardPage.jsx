import { ArrowUpRight, CheckCircle2, ClipboardList, FlaskConical, Filter, Layers3, Search, Sprout, Users } from "lucide-react";

const metrics = [
    { label: "Permohonan hari ini", value: "128", delta: "+12%", accent: "text-emerald-700" },
    { label: "Sampel lab diproses", value: "84", delta: "+8%", accent: "text-emerald-700" },
    { label: "Stok benih aktif", value: "47", delta: "-3%", accent: "text-amber-700" },
    { label: "Akun aktif", value: "26", delta: "+15%", accent: "text-emerald-700" },
];

const requests = [
    { id: "REQ-001", name: "Rina Sari", service: "Konsultasi", status: "Diterima" },
    { id: "REQ-002", name: "Budi Santoso", service: "Pengaduan", status: "Diproses" },
    { id: "REQ-003", name: "Maya Putri", service: "Magang", status: "Selesai" },
    { id: "REQ-004", name: "Dewi Lestari", service: "PPID", status: "Diterima" },
];

const activities = [
    { title: "Laporan lab selesai", detail: "SPK-204 telah diverifikasi dan siap dikirim.", time: "12 menit lalu" },
    { title: "Stok benih diperbarui", detail: "Padi unggul dan jagung hibrida masuk inventaris.", time: "35 menit lalu" },
    { title: "User baru ditambahkan", detail: "Akun admin lab dan operator sudah aktif.", time: "1 jam lalu" },
];

const modules = [
    {
        title: "Permohonan",
        icon: ClipboardList,
        accent: "bg-emerald-100 text-emerald-700",
        items: ["24 permohonan masuk", "7 butuh review", "3 selesai hari ini"],
    },
    {
        title: "Laboratorium",
        icon: FlaskConical,
        accent: "bg-sky-100 text-sky-700",
        items: ["18 sampel pending", "6 hasil menunggu", "2 prioritas tinggi"],
    },
    {
        title: "Benih",
        icon: Sprout,
        accent: "bg-amber-100 text-amber-700",
        items: ["12 varietas aktif", "5 stok menipis", "3 update harga"],
    },
    {
        title: "User",
        icon: Users,
        accent: "bg-violet-100 text-violet-700",
        items: ["26 akun aktif", "4 role", "2 akses pending"],
    },
];

const monthlyTrend = [
    { month: "Jan", value: 42 },
    { month: "Feb", value: 55 },
    { month: "Mar", value: 48 },
    { month: "Apr", value: 67 },
    { month: "Mei", value: 74 },
    { month: "Jun", value: 62 },
];

const statusStyles = {
    Diterima: "bg-emerald-100 text-emerald-700",
    Diproses: "bg-amber-100 text-amber-700",
    Selesai: "bg-sky-100 text-sky-700",
};

export default function AdminDashboardPage() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <header className="rounded-[2rem] border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Panel Admin</p>
                        <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">Ringkasan operasional BRMP DIY</h1>
                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">Kelola permohonan, laboratorium, benih, dan user dari satu dashboard yang fokus, bersih, dan terstruktur.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                            <Search size={16} />
                            <span>Cari data...</span>
                        </label>
                        <button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700">
                            <Filter size={16} />
                            Filter
                        </button>
                        <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-800">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white">
                                <Layers3 size={16} />
                            </div>
                            Superadmin
                        </div>
                    </div>
                </div>
            </header>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                    <article key={metric.label} className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">{metric.label}</p>
                        <div className="mt-3 flex items-end justify-between gap-3">
                            <div className="text-3xl font-black tracking-tight text-slate-900">{metric.value}</div>
                            <span className={`rounded-full px-3 py-1 text-xs font-bold ${metric.accent}`}>{metric.delta}</span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.35fr_0.9fr]">
                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Permohonan</p>
                            <h2 className="mt-2 text-xl font-black text-slate-900">Data permohonan terbaru</h2>
                        </div>
                        <button className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                            Lihat semua
                            <ArrowUpRight size={16} />
                        </button>
                    </div>

                    <div className="mt-5 space-y-3">
                        {requests.map((request) => (
                            <div key={request.id} className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">{request.id}</p>
                                    <h3 className="mt-1 text-sm font-semibold text-slate-900">{request.name}</h3>
                                    <p className="text-sm text-slate-500">{request.service}</p>
                                </div>
                                <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${statusStyles[request.status]}`}>{request.status}</span>
                            </div>
                        ))}
                    </div>
                </article>

                <div className="flex flex-col gap-6">
                    <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Aktivitas</p>
                        <h2 className="mt-2 text-xl font-black text-slate-900">Log aktivitas terkini</h2>
                        <div className="mt-5 space-y-3">
                            {activities.map((activity) => (
                                <div key={activity.title} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">{activity.title}</h3>
                                        <p className="mt-1 text-sm leading-6 text-slate-500">{activity.detail}</p>
                                        <p className="mt-2 text-xs font-medium text-slate-400">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>

                    <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Aksi cepat</p>
                        <h2 className="mt-2 text-xl font-black text-slate-900">Shortcut operasional</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                            <button className="flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-4 text-left transition hover:bg-brand-100">
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Verifikasi permohonan</p>
                                    <p className="mt-1 text-xs text-slate-500">Tindak lanjuti data masuk</p>
                                </div>
                                <ClipboardList className="text-brand-700" size={18} />
                            </button>
                            <button className="flex items-center justify-between rounded-2xl bg-sky-50 px-4 py-4 text-left transition hover:bg-sky-100">
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Review sampel lab</p>
                                    <p className="mt-1 text-xs text-slate-500">Cek antrian pemeriksaan</p>
                                </div>
                                <FlaskConical className="text-sky-700" size={18} />
                            </button>
                        </div>
                    </article>
                </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-4">
                {modules.map((module) => {
                    const Icon = module.icon;
                    return (
                        <article key={module.title} className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${module.accent}`}>
                                    <Icon size={18} />
                                </div>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Modul</span>
                            </div>
                            <h3 className="mt-4 text-lg font-black text-slate-900">{module.title}</h3>
                            <ul className="mt-4 space-y-3">
                                {module.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                                        <span className="h-2 w-2 rounded-full bg-brand-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </section>

            <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Laboratorium</p>
                    <h2 className="mt-2 text-xl font-black text-slate-900">Status sampel</h2>
                    <div className="mt-5 space-y-4">
                        {[
                            { label: "Pending", value: "18", color: "bg-amber-500" },
                            { label: "Diproses", value: "11", color: "bg-sky-500" },
                            { label: "Selesai", value: "29", color: "bg-emerald-500" },
                        ].map((item) => (
                            <div key={item.label}>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="font-medium text-slate-600">{item.label}</span>
                                    <span className="font-bold text-slate-900">{item.value}</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-100">
                                    <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${Number(item.value) * 3}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">Tren bulanan</p>
                    <h2 className="mt-2 text-xl font-black text-slate-900">Permohonan berjalan</h2>
                    <div className="mt-6 flex h-64 items-end gap-3 rounded-[1.5rem] bg-slate-50 p-4">
                        {monthlyTrend.map((item) => (
                            <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                                <div className="flex w-full flex-1 items-end">
                                    <div className="w-full rounded-t-2xl bg-gradient-to-t from-brand-600 to-brand-400" style={{ height: `${item.value * 2}px` }} />
                                </div>
                                <div className="text-xs font-semibold text-slate-500">{item.month}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl bg-brand-50 p-4">
                            <p className="text-slate-500">Rata-rata bulanan</p>
                            <p className="mt-1 text-xl font-black text-brand-800">58</p>
                        </div>
                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <p className="text-slate-500">Target selesai</p>
                            <p className="mt-1 text-xl font-black text-emerald-800">92%</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
