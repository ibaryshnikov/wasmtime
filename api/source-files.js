var N = null;var sourcesIndex = {};
sourcesIndex["wasi_common"] = {"name":"","dirs":[{"name":"fs","files":["dir.rs","dir_builder.rs","dir_entry.rs","error.rs","file.rs","file_type.rs","metadata.rs","mod.rs","open_options.rs","permissions.rs","readdir.rs"]},{"name":"hostcalls","files":["fs.rs","misc.rs","mod.rs","sock.rs"]},{"name":"hostcalls_impl","files":["fs.rs","fs_helpers.rs","misc.rs","mod.rs"]},{"name":"sys","dirs":[{"name":"unix","dirs":[{"name":"hostcalls_impl","files":["fs.rs","fs_helpers.rs","misc.rs","mod.rs"]},{"name":"linux","files":["hostcalls_impl.rs","mod.rs","osfile.rs"]}],"files":["dir.rs","fdentry_impl.rs","host_impl.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["ctx.rs","error.rs","fdentry.rs","helpers.rs","host.rs","lib.rs","macros.rs","memory.rs","wasi.rs","wasi32.rs"]};
sourcesIndex["wasm2obj"] = {"name":"","files":["wasm2obj.rs"]};
sourcesIndex["wasmtime"] = {"name":"","files":["wasmtime.rs"]};
sourcesIndex["wasmtime_api"] = {"name":"","dirs":[{"name":"trampoline","files":["create_handle.rs","func.rs","global.rs","memory.rs","mod.rs","table.rs"]}],"files":["callable.rs","context.rs","externals.rs","instance.rs","lib.rs","module.rs","ref.rs","runtime.rs","trap.rs","types.rs","values.rs","wasm.rs"]};
sourcesIndex["wasmtime_cli"] = {"name":"","files":["lib.rs"]};
sourcesIndex["wasmtime_debug"] = {"name":"","dirs":[{"name":"transform","files":["address_transform.rs","attr.rs","expression.rs","line_program.rs","mod.rs","range_info_builder.rs","simulate.rs","unit.rs","utils.rs"]}],"files":["gc.rs","lib.rs","read_debuginfo.rs","write_debuginfo.rs"]};
sourcesIndex["wasmtime_environ"] = {"name":"","dirs":[{"name":"cache","files":["config.rs","worker.rs"]}],"files":["address_map.rs","cache.rs","compilation.rs","cranelift.rs","func_environ.rs","lib.rs","module.rs","module_environ.rs","tunables.rs","vmoffsets.rs"]};
sourcesIndex["wasmtime_interface_types"] = {"name":"","files":["lib.rs","value.rs"]};
sourcesIndex["wasmtime_jit"] = {"name":"","files":["action.rs","code_memory.rs","compiler.rs","context.rs","function_table.rs","instantiate.rs","lib.rs","link.rs","namespace.rs","resolver.rs","target_tunables.rs"]};
sourcesIndex["wasmtime_obj"] = {"name":"","files":["context.rs","data_segment.rs","function.rs","lib.rs","module.rs","table.rs"]};
sourcesIndex["wasmtime_runtime"] = {"name":"","files":["export.rs","imports.rs","instance.rs","jit_int.rs","lib.rs","libcalls.rs","memory.rs","mmap.rs","sig_registry.rs","signalhandlers.rs","table.rs","trap_registry.rs","traphandlers.rs","vmcontext.rs"]};
sourcesIndex["wasmtime_wasi"] = {"name":"","files":["instantiate.rs","lib.rs","syscalls.rs"]};
sourcesIndex["wasmtime_wast"] = {"name":"","files":["lib.rs","spectest.rs","wast.rs"]};
sourcesIndex["wast"] = {"name":"","files":["wast.rs"]};
createSourceSidebar();
