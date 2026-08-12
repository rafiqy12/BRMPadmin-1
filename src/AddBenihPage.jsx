import { Upload } from "lucide-react";
import { useState } from "react";

export default function AddBenihPage({ onNavigate }) {
    const [form, setForm] = useState({ nama: "", harga: "", deskripsi: "", foto: null });

    const handleFileChange = (event) => {
        const file = event.target.files?.[0] ?? null;
        setForm((prev) => ({ ...prev, foto: file }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // For now, just navigate back after 'save'
        onNavigate?.("benih-jenis-benih");
    };

    return (
        <div className="mx-auto max-w-5xl space-y-6">
            <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-700">HOME &gt; BENIH &gt; JENIS BENIH &gt; TAMBAH</p>
                <h1 className="mt-4 text-3xl font-black text-slate-900">Tambah Jenis Benih Baru</h1>
            </section>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm">
                <div className="space-y-5">
                    <label className="block space-y-2 text-sm font-medium text-slate-700">
                        Nama Benih
                        <input
                            value={form.nama}
                            onChange={(e) => setForm((prev) => ({ ...prev, nama: e.target.value }))}
                            placeholder="Contoh: Padi IR64, Jagung Manis"
                            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                        />
                    </label>

                    <label className="block space-y-2 text-sm font-medium text-slate-700">
                        Harga per Kg (Rp)
                        <input
                            type="number"
                            value={form.harga}
                            onChange={(e) => setForm((prev) => ({ ...prev, harga: e.target.value }))}
                            placeholder="Contoh: 12500"
                            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                        />
                    </label>

                    <div className="space-y-3">
                        <p className="text-sm font-medium text-slate-700">Upload Foto Benih</p>
                        <label className="group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[1.75rem] border-2 border-dashed border-brand-200 bg-slate-50 p-8 text-center transition hover:border-brand-400 hover:bg-slate-100">
                            <Upload className="h-8 w-8 text-brand-500" />
                            <span className="text-sm font-semibold text-brand-700">Klik atau drag foto benih di sini</span>
                            <span className="text-xs text-slate-500">Mendukung format PNG, JPG, JPEG (Maks. 5MB)</span>
                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg"
                                onChange={handleFileChange}
                                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            />
                        </label>
                    </div>

                    <label className="block space-y-2 text-sm font-medium text-slate-700">
                        Deskripsi Benih
                        <textarea
                            value={form.deskripsi}
                            onChange={(e) => setForm((prev) => ({ ...prev, deskripsi: e.target.value }))}
                            placeholder="Tuliskan detail deskripsi varietas, masa tanam, atau petunjuk penggunaan di sini..."
                            rows={5}
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white"
                        />
                    </label>
                </div>

                <div className="mt-8 flex justify-end gap-3">
                    <button type="button" onClick={() => onNavigate?.("benih-jenis-benih")} className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
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
