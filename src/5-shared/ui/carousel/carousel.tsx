import { useCarousel } from "@/5-shared/lib/use-carousel.ts";

type Slide = {
    id: number;
    image: string;
    subtitle: string;
    title: string;
};

const slides: Slide[] = [
    {
        id: 1,
        title: "Mega Sale",
        subtitle: "Up to 50% off",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
        id: 2,
        title: "New Drop",
        subtitle: "Fresh arrivals",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
        id: 3,
        title: "Limited Deal",
        subtitle: "Only today",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
];

export const Carousel = () => {
    const { index, next, prev, goTo } = useCarousel(slides.length);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="relative h-64 overflow-hidden rounded-3xl md:h-96">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="relative h-64 min-w-full md:h-96">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent dark:from-black/80" />

                            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
                                <h2 className="max-w-md text-2xl font-bold text-white md:text-5xl">
                                    {slide.title}
                                </h2>

                                <p className="mt-2 max-w-sm text-sm text-gray-200 md:text-lg">
                                    {slide.subtitle}
                                </p>

                                <button className="mt-4 w-max rounded-xl bg-white px-5 py-2 text-black dark:bg-gray-900 dark:text-white">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur dark:bg-black/30"
                >
                    {"<"}
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur dark:bg-black/30"
                >
                    {">"}
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goTo(slideIndex)}
                            className={`h-2 cursor-pointer rounded-full transition-all ${
                                slideIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
