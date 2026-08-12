import { useState } from "react";

export default function AddUpdateStokPage({ onNavigate }) {
    const [form, setForm] = useState({ jenis: "", keterangan: "Masuk", jumlah: "", tanggal: "", catatan: "" });

    const handleChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onNavigate?.("benih-update-benih");
    };

    return (
        <div className="mx-auto max-w-5xl space-y-6">
            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">HOME &gt; BENIH &gt; UPDATE BENIH &gt; TAMBAH</p>
                <h1 className="mt-4 text-3xl font-black text-slate-900">Tambah Update Stok</h1>
            </section>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                    <label className="block space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
                        Jenis Benih
                        <select value={form.jenis} onChange={handleChange("jenis")} className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white">
                            <option value="">Pilih Jenis Benih...</option>
                            <option value="Padi Cihérang">Padi Cihérang</option>
                            <option value="Jagung Hibrida">Jagung Hibrida</option>
                            <option value="Kedelai Anjasmoro">Kedelai Anjasmoro</option>
                            <option value="Bawang Merah">Bawang Merah</option>
                            <option value="Cabai Rawit">Cabai Rawit</option>
                        </select>
                    </label>

                    <fieldset className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <legend className="px-2 text-sm font-medium text-slate-700">Keterangan Stok</legend>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                            <label className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400">
                                <input type="radio" name="keterangan" value="Masuk" checked={form.keterangan === "Masuk"} onChange={handleChange("keterangan")} className="h-4 w-4 text-brand-500" />
                                Stok Masuk (Penambahan)
                            </label>
                            <label className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-brand-400">
                                <input type="radio" name="keterangan" value="Keluar" checked={form.keterangan === "Keluar"} onChange={handleChange("keterangan")} className="h-4 w-4 text-brand-500" />
                                Stok Keluar (Pengeluaran/Distribusi)
                            </label>
                        </div>
                    </fieldset>

                    <label className="block space-y-2 text-sm font-medium text-slate-700">
                        Jumlah (kg)
                        <input type="number" value={form.jumlah} onChange={handleChange("jumlah")} placeholder="Contoh: 150" className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white" />
                    </label>

                    <label className="block space-y-2 text-sm font-medium text-slate-700">
                        Tanggal Update
                        <input type="date" value={form.tanggal} onChange={handleChange("tanggal")} className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white" />
                    </label>

                    <label className="md:col-span-2 block space-y-2 text-sm font-medium text-slate-700">
                        Catatan tambahan (Opsional)
                        <textarea value={form.catatan} onChange={handleChange("catatan")} placeholder="Tulis rincian tambahan seperti asal benih atau instansi penerima di sini..." rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white" />
                    </label>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <button type="button" onClick={() => onNavigate?.("benih-update-benih")} className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                        Batal
                    </button>
                    <button type="submit" className="rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
}
