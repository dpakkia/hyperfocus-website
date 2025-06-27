import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_5 } from "./virtual_public-8l5fT5dW.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "/Users/dpakkia/Documents/Sviluppo/hyperfocus-website/hyperfocus-website/node_modules/hookable/dist/index.mjs";
import "/Users/dpakkia/Documents/Sviluppo/hyperfocus-website/hyperfocus-website/node_modules/unctx/dist/index.mjs";
import "/Users/dpakkia/Documents/Sviluppo/hyperfocus-website/hyperfocus-website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/dpakkia/Documents/Sviluppo/hyperfocus-website/hyperfocus-website/node_modules/radix3/dist/index.mjs";
import "/Users/dpakkia/Documents/Sviluppo/hyperfocus-website/hyperfocus-website/node_modules/defu/dist/defu.mjs";
import "/Users/dpakkia/Documents/Sviluppo/hyperfocus-website/hyperfocus-website/node_modules/ufo/dist/index.mjs";
const _imports_1 = publicAssetsURL("/instagram.svg");
const _imports_2 = publicAssetsURL("/linkedin.svg");
const _imports_3 = publicAssetsURL("/mail.svg");
const _imports_4 = publicAssetsURL("/whatsapp.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollPercent = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-screen min-h-[300vh] bg-[#333] overflow-hidden" }, _attrs))} data-v-61c594c7><img${ssrRenderAttr("src", _imports_0)} alt="Background Smoke" class="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none" data-v-61c594c7><div class="${ssrRenderClass([scrollPercent.value > 25 ? "-translate-y-[100vh]" : "translate-y-0", "fixed inset-0 flex justify-center items-center z-30 transition-transform duration-500 ease-out"])}" data-v-61c594c7><div class="flex flex-col items-center text-white text-center font-[Jost]" data-v-61c594c7><h1 class="text-8xl font-bold tracking-widest" data-v-61c594c7>HYPERFOCUS</h1><p class="text-3xl font-light mt-2" data-v-61c594c7>SOLUZIONI CREATIVE</p><div class="flex gap-6 mt-6" data-v-61c594c7><a href="https://instagram.com" target="_blank" rel="noopener" class="transition-transform duration-300 transform hover:scale-110 group" data-v-61c594c7><img${ssrRenderAttr("src", _imports_1)} alt="Instagram" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" data-v-61c594c7></a><a href="https://linkedin.com" target="_blank" rel="noopener" class="transition-transform duration-300 transform hover:scale-110 group" data-v-61c594c7><img${ssrRenderAttr("src", _imports_2)} alt="LinkedIn" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" data-v-61c594c7></a><a href="mailto:info@hyperfocus.it" class="transition-transform duration-300 transform hover:scale-110 group" data-v-61c594c7><img${ssrRenderAttr("src", _imports_3)} alt="Email" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" data-v-61c594c7></a><a href="https://wa.me/3703016677" target="_blank" rel="noopener" class="transition-transform duration-300 transform hover:scale-110 group" data-v-61c594c7><img${ssrRenderAttr("src", _imports_4)} alt="WhatsApp" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" data-v-61c594c7></a></div><img${ssrRenderAttr("src", _imports_5)} alt="Scroll Down Icon" class="w-[32px] h-auto mt-10 animate-bounce" data-v-61c594c7></div></div>`);
      if (scrollPercent.value > 25) {
        _push(`<div class="fixed bg-orange-500 z-40 rounded-lg animate-snappyFadeIn" style="${ssrRenderStyle({
          top: "6%",
          left: "calc(25vw + 3%)",
          width: "calc(50vw - 6%)",
          height: "calc(100vh - 12%)"
        })}" data-v-61c594c7></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed top-5 left-5 bg-black/70 text-white text-sm p-2 rounded z-50 font-mono" data-v-61c594c7> Scroll: ${ssrInterpolate(scrollPercent.value.toFixed(1))}%<br data-v-61c594c7> ${ssrInterpolate(scrollPercent.value > 25 ? "✅ Superato 25%" : "⬆️ Sotto 25%")}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61c594c7"]]);
export {
  index as default
};
//# sourceMappingURL=index-CDbUoXIp.js.map
