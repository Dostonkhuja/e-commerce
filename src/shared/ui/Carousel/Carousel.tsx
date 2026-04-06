import { useCarousel } from "../../lib/useCarousel";

type Slide = {
    id: number;
    title: string;
    subtitle: string;
    image: string;
};

const slides: Slide[] = [
    {
        id: 1,
        title: "Mega Sale",
        subtitle: "Up to 50% off",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
        id: 2,
        title: "New Drop",
        subtitle: "Fresh arrivals",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
        id: 3,
        title: "Limited Deal",
        subtitle: "Only today",
        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
];

export const Carousel = () => {
    const { index, next, prev, goTo } = useCarousel(slides.length);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-6">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-3xl">

                {/* Slides */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full relative h-64 md:h-96">

                            {/* Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent dark:from-black/80" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">

                                <h2 className="text-2xl md:text-5xl font-bold text-white max-w-md">
                                    {slide.title}
                                </h2>

                                <p className="text-sm md:text-lg text-gray-200 mt-2 max-w-sm">
                                    {slide.subtitle}
                                </p>

                                <button className="mt-4 px-5 py-2 rounded-xl bg-white text-black dark:bg-gray-900 dark:text-white w-max">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur bg-white/30 dark:bg-black/30 p-2 rounded-full"
                >
                    ‹
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur bg-white/30 dark:bg-black/30 p-2 rounded-full"
                >
                    ›
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full cursor-pointer transition-all ${
                                i === index
                                    ? "w-6 bg-white"
                                    : "w-2 bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};