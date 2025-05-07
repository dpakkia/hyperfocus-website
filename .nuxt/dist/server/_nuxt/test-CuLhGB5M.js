import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/dpakkia/Lavoro/hyperfocus-website/node_modules/hookable/dist/index.mjs";
import "/Users/dpakkia/Lavoro/hyperfocus-website/node_modules/unctx/dist/index.mjs";
import "/Users/dpakkia/Lavoro/hyperfocus-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/dpakkia/Lavoro/hyperfocus-website/node_modules/radix3/dist/index.mjs";
import "/Users/dpakkia/Lavoro/hyperfocus-website/node_modules/defu/dist/defu.mjs";
import "/Users/dpakkia/Lavoro/hyperfocus-website/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen items-center justify-center bg-gray-100" }, _attrs))}><div class="rounded-2xl border p-8 shadow-lg bg-white max-w-lg text-center"><h1 class="text-4xl font-bold text-blue-600 mb-4">Nuxt + Tailwind CSS</h1><p class="text-lg text-gray-700 mb-6"> ✅ La configurazione funziona! Questa è una semplice pagina di test. </p><button class="rounded-xl bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 transition"> Test Button </button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  test as default
};
//# sourceMappingURL=test-CuLhGB5M.js.map
