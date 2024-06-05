import React from 'react';

const Ecosystem = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-green-800 via-green-700 to-green-600 text-white dark:text-white-800">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-white-900">Ecosystem</h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="space-y-12">
                <div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-white-900">
                      The Philippine ecosystem is a marvel of biodiversity, showcasing an extraordinary variety of life forms and habitats.
                      Located in the Coral Triangle, the Philippines is home to some of the richest marine environments on the planet,
                      teeming with over 500 species of coral and 2,500 species of fish. Its terrestrial landscapes are equally diverse,
                      with lush rainforests, mangrove swamps, and highland areas supporting a wide range of flora and fauna. Endemic species,
                      such as the Philippine eagle and the tarsier, highlight the uniqueness of the country's wildlife. The nation's archipelagic
                      nature, comprising over 7,000 islands, contributes to its ecological richness by providing isolated environments where
                      species can evolve independently. This remarkable diversity not only supports ecological balance but also underpins local
                      cultures and economies, making the Philippines a critical hotspot for both conservation and sustainable development efforts.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img src="https://source.unsplash.com/400x300/?ecosystem,philippines" alt="Ecosystem" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-white-900">
                        In addition to its rich biodiversity, the Philippine ecosystem plays a crucial role in climate regulation and disaster mitigation.
                        The country's extensive mangrove forests act as natural buffers against storm surges and coastal erosion, protecting inland
                        communities from the impacts of typhoons and rising sea levels. These mangroves, along with vast seagrass beds and coral reefs,
                        also serve as vital carbon sinks, absorbing significant amounts of carbon dioxide from the atmosphere and helping to combat global
                        climate change. The dense rainforests of the Philippines, home to countless endemic plant and animal species, are equally important
                        for their role in maintaining hydrological cycles, preventing soil erosion, and supporting the livelihoods of indigenous peoples.
                        The intricate interplay between marine and terrestrial ecosystems in the Philippines underscores the interconnectedness of nature,
                        where the health of one component directly influences the resilience of the entire system. This ecological complexity and its benefits highlight 
                        the imperative of preserving the Philippine environment for future generations.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img src="https://source.unsplash.com/400x300/?ecosystem,forest" alt="Ecosystem" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecosystem;
