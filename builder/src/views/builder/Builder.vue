<template>
  <div class="flex flex-grow">
    <!-- SIDE BAR -->
    <Transition>
      <div :class="`w-[${isEditorActive ? '350px' : '0'}] shadow-lg relative`">
        <div class="fixed h-full">
          <div
            v-show="isEditorActive"
            class="w-[350px] h-full overflow-y-scroll"
          >
            <div class="flex">
              <button
                @click="activeTab = 'konten'"
                class="p-3 w-full"
                :class="`${
                  activeTab === 'konten'
                    ? 'bg-white border-b-2 border-blue-600'
                    : 'bg-slate-100'
                }`"
              >
                Konten
              </button>
              <button
                @click="activeTab = 'gaya'"
                class="p-3 bg-slate-100 w-full"
                :class="`${
                  activeTab === 'gaya'
                    ? 'bg-white border-b-2 border-blue-600'
                    : 'bg-slate-100'
                }`"
              >
                Tata Letak & Gaya
              </button>
            </div>
            <!-- konten -->
            <div v-if="activeTab === 'konten'" class="p-5 h-full">
              <!-- CONTENT EDITOR -->
              <div class="mb-3">
                <label for="">Title</label>
                <input
                  type="text"
                  class="w-full border-gray-300 rounded-md mt-1"
                  v-model="components[activeSection].contents.title.value"
                />
              </div>
              <div class="mb-3">
                <label for="">Description</label>
                <textarea
                  v-model="components[activeSection].contents.paragraph.value"
                  class="w-full border-gray-300 rounded-md mt-1"
                ></textarea>
              </div>
              <!-- END CONTENT EDITOR -->

              <!-- IMAGE -->
              <div v-if="components[activeSection].contents.image" class="mb-3">
                <label for="">Image Url</label>
                <input
                  type="text"
                  v-model="components[activeSection].contents.image.url"
                  class="w-full border-gray-300 rounded-md mt-1"
                />
              </div>
              <!-- END IMAGE -->

              <!-- BUTTON EDITOR -->
              <div
                v-if="components[activeSection].contents.button"
                class="mt-5"
              >
                <h2 id="accordion-collapse-heading-1">
                  <div
                    class="flex items-center justify-between w-full p-3 mt-2 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Button</span>
                  </div>
                </h2>
                <template
                  v-for="(button, index) in components[activeSection].contents
                    .button"
                >
                  <h2 id="accordion-collapse-heading-3">
                    <button
                      @click="setActiveAccordion(index)"
                      type="button"
                      class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>Button {{ index + 1 }}</span>
                      <svg
                        data-accordion-icon=""
                        class="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    :class="`${activeAccordion !== index && 'hidden'}`"
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <div
                      class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
                    >
                      <div class="mb-3">
                        <label for="">Title</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="button.value"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Link</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="button.link"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <!-- END BUTTON EDITOR -->

              <!-- FEATURES EDITOR -->
              <div v-if="components[activeSection].contents.features">
                <h2 id="accordion-collapse-heading-1">
                  <div
                    class="flex items-center justify-between w-full p-3 mt-2 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Features</span>
                  </div>
                </h2>
                <template
                  v-for="(features, index) in components[activeSection].contents
                    .features.child.item"
                >
                  <h2 id="accordion-collapse-heading-3">
                    <button
                      @click="setActiveAccordion(index)"
                      type="button"
                      class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>Features {{ index + 1 }}</span>
                      <svg
                        data-accordion-icon=""
                        class="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    :class="`${activeAccordion !== index && 'hidden'}`"
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <div
                      class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
                    >
                      <div class="mb-3">
                        <label for="">Icon</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="features.icon"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Title</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="features.title"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Link</label>
                        <textarea
                          class="w-full border-gray-300 rounded-md mt-1"
                          rows="5"
                          v-model="features.paragraph"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </template>

                <button
                  @click="addFeatures"
                  class="py-2 px-5 bg-blue-600 w-full text-white rounded-md mt-5"
                >
                  Add Features
                </button>
              </div>
              <!-- END FEATURES EDITOR -->

              <!-- TESTIMONI EDITOR -->
              <div v-if="components[activeSection].contents.testimoni">
                <h2 id="accordion-collapse-heading-1">
                  <div
                    class="flex items-center justify-between w-full p-3 mt-2 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Testimoni</span>
                  </div>
                </h2>
                <template
                  v-for="(features, index) in components[activeSection].contents
                    .testimoni.child.item"
                >
                  <h2 id="accordion-collapse-heading-3">
                    <button
                      @click="setActiveAccordion(index)"
                      type="button"
                      class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>Testimoni {{ index + 1 }}</span>
                      <svg
                        data-accordion-icon=""
                        class="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    :class="`${activeAccordion !== index && 'hidden'}`"
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <div
                      class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
                    >
                      <div class="mb-3">
                        <label for="">Image</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="features.image"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Name</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="features.name"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Position</label>
                        <input
                          type="text"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="features.position"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Testimoni</label>
                        <textarea
                          class="w-full border-gray-300 rounded-md mt-1"
                          rows="5"
                          v-model="features.testimoni"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <!-- END TESTIMONI EDITOR -->
            </div>
            <!-- gaya -->
            <div v-if="activeTab === 'gaya'" class="p-5">
              <!-- BACKGROUND COLOR -->
              <div>
                <label for="">Background Color</label>
                <input
                  type="color"
                  class="w-full border-gray-300 rounded-md mt-1"
                  v-model="components[activeSection].style.backgroundColor"
                />
              </div>
              <!-- END BACKGROUND COLOR -->

              <!-- TITLE COLOR -->
              <div>
                <label for="">Title</label>
                <input
                  type="color"
                  class="w-full border-gray-300 rounded-md mt-1"
                  v-model="components[activeSection].contents.title.style.color"
                />
              </div>
              <!-- END TITLE COLOR -->

              <!-- PARAGRAPH COLOR -->
              <div>
                <label for="">Description</label>
                <input
                  type="color"
                  class="w-full border-gray-300 rounded-md mt-1"
                  v-model="
                    components[activeSection].contents.paragraph.style.color
                  "
                />
              </div>
              <!-- END PARAGRAPH COLOR -->

              <!-- BUTTON EDITOR -->
              <div
                v-if="components[activeSection].contents.button"
                class="mt-5"
              >
                <h2 id="accordion-collapse-heading-1">
                  <div
                    class="flex items-center justify-between w-full p-3 mt-2 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                    data-accordion-target="#accordion-collapse-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-collapse-body-1"
                  >
                    <span>Button</span>
                  </div>
                </h2>
                <template
                  v-for="(button, index) in components[activeSection].contents
                    .button"
                >
                  <h2 id="accordion-collapse-heading-3">
                    <button
                      @click="setActiveAccordion(index)"
                      type="button"
                      class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>Button {{ index + 1 }}</span>
                      <svg
                        data-accordion-icon=""
                        class="w-6 h-6 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    :class="`${activeAccordion !== index && 'hidden'}`"
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <div
                      class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700"
                    >
                      <div class="mb-3">
                        <label for="">Button Color</label>
                        <input
                          type="color"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="button.style['background-color']"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="">Text Color</label>
                        <input
                          type="color"
                          class="w-full border-gray-300 rounded-md mt-1"
                          v-model="button.style.color"
                        />
                      </div>
                    </div>
                  </div>
                </template>
              </div>
              <!-- END BUTTON EDITOR -->
            </div>
          </div>

          <!-- Editor Colapse -->
          <div
            @click="isEditorActive = !isEditorActive"
            class="absolute top-[50%] -right-[20px] py-2 px-1 bg-blue-600 text-white cursor-pointer shadow-md"
          >
            <i v-if="isEditorActive" class="fa-solid fa-chevron-left"></i>
            <i v-else class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </Transition>
    <!-- BUILDER -->
    <div class="flex-auto">
      <Builder
        :components="components"
        :activeSection="activeSection"
        @setActiveSection="setActiveSection"
      />
    </div>
  </div>
</template>

<script>
import Builder from "@/components/Builder/index.vue";

export default {
  data() {
    return {
      components: [
        {
          name: "Navbar",
          type: "header",
          contents: {
            title: {
              value: "Blazing Fast Hosting for Your Business",
              style: {
                "font-size": "5rem",
                "font-weight": "800",
                "line-height": "5rem",
                color: "#000000",
              },
            },
            paragraph: {
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              style: {
                "font-size": "1rem",
                "font-weight": "400",
                margin: "1rem 0",
                color: "#888888",
              },
            },
            image: {
              url: "https://www.rctheme.com/demo-html/erahost/images/home-banner.png",
              position: "right",
              class: ["w-full", "rounded-lg"],
            },
            button: [
              {
                value: "Explore Now",
                link: "https://google.com",
                style: {
                  "background-color": "#ff3d2e",
                  "margin-top": "10px",
                  "margin-right": "5px",
                  padding: "10px 20px",
                  "border-radius": "10px",
                  color: "#ffffff",
                },
              },
              {
                value: "Learn More",
                link: "https://google.com",
                style: {
                  "background-color": "#ff3d2e",
                  "margin-top": "10px",
                  padding: "10px 20px",
                  "border-radius": "10px",
                  color: "#ffffff",
                },
              },
            ],
            class: ["mr-10"],
          },
          class: [],
          style: {
            backgroundColor: "#ffffff",
          },
        },
        {
          name: "Header",
          type: "hero",
          contents: {
            title: {
              value: "Blazing Fast Hosting for Your Business",
              style: {
                "font-size": "5rem",
                "font-weight": "800",
                "line-height": "5rem",
                color: "#000000",
              },
            },
            paragraph: {
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              style: {
                "font-size": "1rem",
                "font-weight": "400",
                margin: "1rem 0",
                color: "#888888",
              },
            },
            image: {
              url: "https://www.rctheme.com/demo-html/erahost/images/home-banner.png",
              position: "right",
              class: ["w-full", "rounded-lg"],
            },
            button: [
              {
                value: "Explore Now",
                link: "https://google.com",
                style: {
                  "background-color": "#ff3d2e",
                  "margin-top": "10px",
                  "margin-right": "5px",
                  padding: "10px 20px",
                  "border-radius": "10px",
                  color: "#ffffff",
                },
              },
              {
                value: "Learn More",
                link: "https://google.com",
                style: {
                  "background-color": "#ff3d2e",
                  "margin-top": "10px",
                  padding: "10px 20px",
                  "border-radius": "10px",
                  color: "#ffffff",
                },
              },
            ],
            class: ["mr-10"],
          },
          class: ["py-20"],
          style: {
            backgroundColor: "#ffffff",
          },
        },
        {
          name: "Features",
          type: "features",
          contents: {
            title: {
              value: "Hosting features",
              style: {
                "font-size": "5rem",
                "font-weight": "800",
                "line-height": "5rem",
                color: "#000000",
              },
            },
            paragraph: {
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              style: {
                "font-size": "1rem",
                "font-weight": "400",
                padding: "0 17rem",
                margin: "2rem 0",
                color: "#888888",
              },
            },
            features: {
              child: {
                item: [
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png",
                    title: "Powerful Server",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png",
                    title: "Powerful Server",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png",
                    title: "Powerful Server",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png",
                    title: "Powerful Server",
                    paragraph:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                ],
                class: ["shadow-md", "p-5", "bg-white", "rounded-md", "flex"],
              },
              parent: {
                class: ["grid", "grid-cols-2", "gap-5", "mt-10", "text-left"],
              },
            },
            class: ["col-span-2", "text-center"],
          },
          class: ["py-20"],
          style: {
            backgroundColor: "#f2f2f2",
          },
        },
        {
          name: "Testimoni",
          type: "testimoni",
          contents: {
            title: {
              value: "Happy Clients With Digital Transformation",
              style: {
                "font-size": "3rem",
                "font-weight": "800",
                "line-height": "5rem",
                color: "#000000",
              },
            },
            paragraph: {
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              style: {
                "font-size": "1rem",
                "font-weight": "400",
                padding: "0 17rem",
                margin: "1rem 0",
                color: "#888888",
              },
            },
            testimoni: {
              child: {
                item: [
                  {
                    image:
                      "https://separateweb.com/blueket-template/images/common/user-image-2.jpg",
                    name: "Aji Bayu Nugroho",
                    position: "CEO",
                    testimoni:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                  {
                    image:
                      "https://separateweb.com/blueket-template/images/common/user-image-2.jpg",
                    name: "Aji Bayu Nugroho",
                    position: "CEO",
                    testimoni:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                  {
                    image:
                      "https://separateweb.com/blueket-template/images/common/user-image-2.jpg",
                    name: "Aji Bayu Nugroho",
                    position: "CEO",
                    testimoni:
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  },
                ],
                class: [
                  "shadow-md",
                  "p-5",
                  "bg-white",
                  "rounded-md",
                  "w-1/3",
                  "mr-4",
                ],
              },
              parent: {
                class: ["flex", "mt-10", "text-left"],
              },
            },
            class: ["col-span-2", "text-center"],
          },
          class: ["py-20"],
          style: {
            backgroundColor: "#ffffff",
          },
        },
        {
          name: "Cta 1",
          type: "cta",
          contents: {
            title: {
              value:
                "Let's create more tools and ideas that brings us together.",
              style: {
                "font-size": "3rem",
                "font-weight": "800",
                "line-height": "3rem",
                color: "#000000",
              },
            },
            image: {
              url: "https://cdni.iconscout.com/illustration/premium/thumb/employer-manages-cloud-server-hosting-4153017-3443563.png",
              position: "right",
              class: ["w-full", "rounded-lg"],
            },
            paragraph: {
              value:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              style: {
                color: "#888888",
              },
            },
            button: [
              {
                value: "Explore Now",
                link: "https://google.com",
                style: {
                  "background-color": "#ff3d2e",
                  "margin-top": "10px",
                  "margin-right": "5px",
                  padding: "10px 20px",
                  "border-radius": "10px",
                  color: "#ffffff",
                },
              },
            ],
            class: ["col-span-2", "text-center"],
          },
          class: ["py-20"],
          style: {
            backgroundColor: "#ffffff",
          },
        },
      ],
      activeTab: "konten",
      isEditorActive: true,
      activeSection: 0,
      activeAccordion: 0,
    };
  },
  components: {
    Builder,
  },
  methods: {
    setActiveSection(index) {
      this.activeSection = index;
    },
    setActiveAccordion(index) {
      if (this.activeAccordion === index) {
        this.activeAccordion = null;
      } else {
        this.activeAccordion = index;
      }
    },
    addFeatures() {
      this.components[this.activeSection].contents.features.child.item.push({
        icon: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png",
        title: "Powerful Server",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      });
    },
  },
};
</script>

<style scoped>
.v-enter-active {
  animation: swipeIn 0.5s ease;
}
.v-leave-active {
  width: 0;
  animation: swipeOut 0.5s ease;
}

@keyframes swipeIn {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 0;
    width: 350px;
  }
}

@keyframes swipeOut {
  0% {
    width: 350px;
  }
  100% {
    width: 0;
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(179, 179, 179);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(161, 161, 161);
}
</style>
