// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const AppSidebar: React.FC = () => {
  const [articlesOpen, setArticlesOpen] = useState(true);

  return (
    <div className="flex flex-col bg-gray-800 text-white w-64 h-full">
      <div className="p-6 text-2xl font-bold">Dashboard</div>

      <ul className="flex-1 px-4 space-y-2 text-sm">
        {/* ARTICLES MAIN ITEM */}
        <li>
          <button
            className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-700 rounded text-left"
            onClick={() => setArticlesOpen(!articlesOpen)}
          >
            <span className="font-medium">Articles</span>
            {articlesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>

          {/* Sub-items */}
          {articlesOpen && (
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li><NavLink to="/articles/create" className="block px-3 py-1 rounded hover:bg-gray-700">Create Article</NavLink></li>
              <li><NavLink to="/articles/generate" className="block px-3 py-1 rounded hover:bg-gray-700">Generate Article</NavLink></li>
              <li><NavLink to="/articles/projects" className="block px-3 py-1 rounded hover:bg-gray-700">Key Projects</NavLink></li>
              <li><NavLink to="/articles/ai-keywords" className="block px-3 py-1 rounded hover:bg-gray-700">AI Keywords to Article</NavLink></li>
              <li><NavLink to="/articles/steal" className="block px-3 py-1 rounded hover:bg-gray-700">Steal Competitor Keywords</NavLink></li>
              <li><NavLink to="/articles/import" className="block px-3 py-1 rounded hover:bg-gray-700">Import Keywords from SGC</NavLink></li>
              <li><NavLink to="/articles/manual" className="block px-3 py-1 rounded hover:bg-gray-700">Manual Keywords to Article</NavLink></li>
              <li><NavLink to="/articles/bulk" className="block px-3 py-1 rounded hover:bg-gray-700">Bulk Keywords to Article</NavLink></li>
              <li><NavLink to="/articles/longtail" className="block px-3 py-1 rounded hover:bg-gray-700">Longtail Keywords to Article</NavLink></li>
              <li><NavLink to="/articles/settings" className="block px-3 py-1 rounded hover:bg-gray-700">Article Settings</NavLink></li>
            </ul>
          )}
        </li>

        {/* Other Sidebar Items */}
        <li>
          <NavLink
            to="/autoblog"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Auto Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/links"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Internal Links
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/backlinks"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Free Backlinks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/integrations"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Integrations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
            }
          >
            Help Center
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppSidebar;
