type EventType = "click" | "scroll" | "mousemove";

type ExcludeEvent = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click");

// handleEvent("Scroll") //Error
