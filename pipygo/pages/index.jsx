
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [goal, setGoal] = useState("");
  const [period, setPeriod] = useState("day");

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-2">Your Goal. Your Plan. Your Chance.</h1>

      <div className="flex flex-col items-center gap-2 w-full max-w-xl mt-4">
        <Input
          type="text"
          placeholder="Enter your goal..."
          className="text-lg"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <div className="flex justify-center gap-2 text-sm text-gray-600">
          {['day', 'week', 'month', 'year'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-full border ${period === p ? 'border-black font-semibold' : 'border-gray-300'}`}
            >
              for a {p}
            </button>
          ))}
        </div>
        <Button className="w-full bg-black text-white text-lg">Get Your Plan</Button>
      </div>

      <Card className="max-w-xl mt-8 w-full">
        <CardContent className="text-sm text-gray-700">
          <p className="italic mb-2">
            "The journey of a thousand miles begins with a single step."
          </p>
          <h2 className="font-semibold mt-4">Ideas for Goals</h2>
          <ul className="list-disc ml-6 text-sm">
            <li>Reach 5000 MMR in Dota 2</li>
            <li>Lose 10 lbs by summer</li>
            <li>Create a passive income stream</li>
          </ul>

          <h2 className="font-semibold mt-6">Checklist (Example)</h2>
          <ul className="list-disc ml-6 text-sm">
            <li>Review high MMR player matches</li>
            <li>Improve your map awareness</li>
            <li>Experiment with new hero roles</li>
          </ul>

          <p className="italic mt-4">
            Success is the sum of small efforts, repeated day in and day out.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
