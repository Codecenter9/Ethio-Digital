import React, {
    useCallback,
    useContext,
    useEffect,
    useState,
    createContext,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselContext = createContext(null);

function useCarousel() {
    const context = useContext(CarouselContext);
    if (!context)
        throw new Error("useCarousel must be used within a <Carousel />");
    return context;
}

function Carousel({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className = "",
    children,
    ...props
}) {
    const [carouselRef, api] = useEmblaCarousel(
        { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
        plugins
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api) => {
        if (!api) return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = useCallback(() => api?.scrollNext(), [api]);

    const handleKeyDown = useCallback(
        (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext]
    );

    useEffect(() => {
        if (!api || !setApi) return;
        setApi(api);
    }, [api, setApi]);

    useEffect(() => {
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => api?.off("select", onSelect);
    }, [api, onSelect]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api,
                opts,
                orientation:
                    orientation ||
                    (opts?.axis === "y" ? "vertical" : "horizontal"),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
            }}
        >
            <div
                onKeyDownCapture={handleKeyDown}
                className={`relative ${className}`}
                role="region"
                aria-roledescription="carousel"
                data-slot="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

function CarouselContent({ className = "", ...props }) {
    const { carouselRef, orientation } = useCarousel();
    return (
        <div
            ref={carouselRef}
            className="overflow-hidden"
            data-slot="carousel-content"
        >
            <div
                className={`flex ${
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"
                } ${className}`}
                {...props}
            />
        </div>
    );
}

function CarouselItem({ className = "", ...props }) {
    const { orientation } = useCarousel();
    return (
        <div
            role="group"
            aria-roledescription="slide"
            data-slot="carousel-item"
            className={`min-w-0 shrink-0 grow-0 basis-full ${
                orientation === "horizontal" ? "pl-4" : "pt-4"
            } ${className}`}
            {...props}
        />
    );
}

function CarouselPrevious({ className = "", ...props }) {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return (
        <button
            className={`w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 ${className}`}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft />
            <span className="sr-only">Previous slide</span>
        </button>
    );
}

function CarouselNext({ className = "", ...props }) {
    const { scrollNext, canScrollNext } = useCarousel();
    return (
        <button
            className={`w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 ${className}`}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight />
            <span className="sr-only">Next slide</span>
        </button>
    );
}

export {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
};
